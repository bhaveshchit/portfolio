import React, { useEffect, useRef } from 'react';
import './ShootingStars.css';

export default function ShootingStars({ active = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    let animationId = null;
    let shootingStars = [];

    class ShootingStar {
      constructor() {
        this.x = Math.random() * canvas.width * 0.7 + canvas.width * 0.3;
        this.y = Math.random() * canvas.height * 0.5;
        this.angle = Math.random() * 0.3 + 0.1;
        this.speed = Math.random() * 6 + 8;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.size = Math.random() * 1.5 + 0.5;
        this.trailLength = Math.random() * 80 + 60;
        this.opacity = 1;
        this.maxOpacity = Math.random() * 0.8 + 0.4;
        this.lifetime = 0;
        this.maxLifetime = Math.random() * 100 + 150;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.lifetime++;
        if (this.lifetime > this.maxLifetime * 0.7) {
          this.opacity = this.maxOpacity * (1 - (this.lifetime - this.maxLifetime * 0.7) / (this.maxLifetime * 0.3));
        } else {
          this.opacity = this.maxOpacity;
        }
        return this.lifetime < this.maxLifetime && this.x > 0 && this.x < canvas.width && this.y < canvas.height;
      }

      draw(ctx) {
        const gradient = ctx.createLinearGradient(
          this.x,
          this.y,
          this.x - Math.cos(this.angle) * this.trailLength,
          this.y - Math.sin(this.angle) * this.trailLength
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(220, 237, 255, ${this.opacity * 0.7})`);
        gradient.addColorStop(1, `rgba(100, 150, 255, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.size;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(this.x - Math.cos(this.angle) * this.trailLength, this.y - Math.sin(this.angle) * this.trailLength);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.9})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(200, 220, 255, ${this.opacity * 0.4})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // subtle background tint so stars feel integrated
      ctx.fillStyle = 'rgba(15, 23, 42, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.015) {
        shootingStars.push(new ShootingStar());
      }

      shootingStars = shootingStars.filter(star => {
        if (star.update()) {
          star.draw(ctx);
          return true;
        }
        return false;
      });

      animationId = requestAnimationFrame(animate);
    }

    // Start/stop based on `active`
    function start() {
      resize();
      window.addEventListener('resize', resize);
      if (!animationId) animate();
    }

    function stop() {
      if (animationId) cancelAnimationFrame(animationId);
      animationId = null;
      shootingStars = [];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      window.removeEventListener('resize', resize);
    }

    if (active) start();

    return () => {
      stop();
    };
  }, [active]);

  return <canvas ref={canvasRef} className="shooting-stars-canvas" />;
}
