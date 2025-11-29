
import React, { useState, useRef, useLayoutEffect } from 'react';
import { Button, Drawer, DrawerTrigger, DrawerContent } from './ui';
import MonsterIndicator from './MonsterIndicator';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];


function Navigation({ darkMode, toggleDarkMode }) {
  const [hovered, setHovered] = useState(null);
  const navRefs = useRef([]);
  const [monsterPos, setMonsterPos] = useState({ left: 0, width: 0, visible: false });

  useLayoutEffect(() => {
    if (hovered !== null && navRefs.current[hovered]) {
      const rect = navRefs.current[hovered].getBoundingClientRect();
      setMonsterPos({
        left: rect.left + rect.width / 2,
        width: rect.width,
        visible: true,
      });
    } else {
      setMonsterPos((p) => ({ ...p, visible: false }));
    }
  }, [hovered]);

  return (
    <nav className="navigation" style={{ position: 'relative' }}>
      <div className="logo">{'</>'} Bhavesh</div>
      {/* Desktop nav */}
      <div style={{ position: 'relative' }}>
        {/* Monster indicator */}
        <ul className="nav-menu">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              ref={el => (navRefs.current[i] = el)}
              style={{ position: 'relative' }}
            >
              <a href={link.href} className="nav-link">{link.label}</a>
            </li>
          ))}
          <li>
            <button
              className="theme-toggle-btn"
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              <span className="theme-toggle-icon">
                {darkMode ? '☀️' : '🌙'}
              </span>
            </button>
          </li>
        </ul>
      </div>
      {/* Mobile nav: Hamburger + Drawer */}
      <div className="nav-mobile">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Open menu">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div style={{ padding: 24 }}>
              <div className="logo" style={{ marginBottom: 24 }}>{'</>'} Bhavesh</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {navLinks.map(link => (
                  <li key={link.href} style={{ marginBottom: 16 }}>
                    <a href={link.href} className="nav-link" style={{ fontSize: '1.2rem' }}>{link.label}</a>
                  </li>
                ))}
                <li>
                  <button
                    className="theme-toggle-btn"
                    onClick={toggleDarkMode}
                    aria-label="Toggle theme"
                    title={darkMode ? 'Light Mode' : 'Dark Mode'}
                  >
                    <span className="theme-toggle-icon">
                      {darkMode ? '☀️' : '🌙'}
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}

export default Navigation;
