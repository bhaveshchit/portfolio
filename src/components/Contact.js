import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section" data-scroll-animation="fadeInUp">
      <h2 className="section-title" data-scroll-animation="fadeInUp">Get In Touch</h2>
      <div className="contact-container">
        <p className="contact-description">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out through the form below or directly via email and social media.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What is this about?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            {submitted ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </form>

        <div className="contact-links">
          <a href="mailto:chittorabhavesh24@gmail.com" className="contact-link">
            <span>📧</span>
            <span>chittorabhavesh24@gmail.com</span>
          </a>
          <a href="tel:+1234567890" className="contact-link">
            <span>📱</span>
            <span>+91-8824991267</span>
          </a>
          <a href="https://www.linkedin.com/in/bhavesh-chittora-04634823a/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span>💼</span>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
