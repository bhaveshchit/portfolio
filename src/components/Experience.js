import React, { useState } from 'react';

function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      id: 1,
      date: 'January 2024 - November 2025',
      title: 'Freelance Developer & Tech Consultant',
      company: 'Independent',
      shortDescription: 'Partnered with diverse businesses to architect cutting-edge digital solutions...',
      fullDescription: (
        <>
          <p>Partnered with diverse businesses to architect cutting-edge digital solutions. Delivered strategic tech consulting, translating complex business challenges into scalable applications. Built and optimized 15+ production websites, driving measurable business impact and revenue growth for clients across multiple industries.</p>
          <p><strong>Key Achievements:</strong></p>
          <ul>
            <li>Consulted 15+ clients across e-commerce, SaaS, and service industries on tech strategy and modernization</li>
            <li>Architected and deployed full-stack solutions using React, Node.js, Three.js, and cloud infrastructure</li>
            <li>Increased client website performance by 45% through optimization and modern tech stack implementation</li>
            <li>Managed end-to-end project lifecycles from requirement gathering to deployment and maintenance</li>
            <li>Established long-term partnerships with 8+ clients through exceptional delivery and ongoing support</li>
          </ul>
        </>
      )
    },
    {
      id: 2,
      date: 'July 2023 - January 2024',
      title: 'Associate Developer',
      company: 'Ploysports & Multiple Ventures',
      shortDescription: 'Architected secure authentication APIs using AWS Cognito...',
      fullDescription: (
        <>
          <p><strong>Ploysports – Fantasy Gaming Company:</strong> Led the development and creation of APIs for the authentication process using Cognito Authentication. Developed serverless APIs for third-party integration with the Polysports platform, while managing and coordinating the team to ensure seamless delivery.</p>
          <p><strong>Nukhba – Online Restaurant Booking Platform (Dubai):</strong> Developed the APIs and frontend for an online restaurant dining booking application. Responsible for the complete development of the client-side, user-side, and admin-side functionalities, including the booking process and user management, while overseeing the team to ensure project objectives were met.</p>
          <p><strong>Technologies Used:</strong> AWS Cognito, Node.js, Express, React, MongoDB, Serverless Framework</p>
        </>
      )
    },
    {
      id: 3,
      date: 'January 2022 - July 2023',
      title: 'Backend Developer & Project Coordinator',
      company: 'IdeaSailor Technologies Pvt. Ltd',
      shortDescription: 'Led API development and team coordination for 4 major platforms...',
      fullDescription: (
        <>
          <p><strong>Bhoomi – Real Estate Broker Chain Project:</strong> Oversaw the development of a comprehensive real estate platform. Coordinated the team responsible for creating APIs, managing server-side logic, handling the authentication process, and ensuring smooth process logic for brokers. Additionally, led the development of APIs for the admin panel.</p>
          <p><strong>Manago Foods – Online Food Ordering & Delivery:</strong> Managed the complete backend infrastructure. Coordinated the development of APIs for everything from authentication to order processing. Supervised the team responsible for building the admin backend and vendor order management system.</p>
          <p><strong>Hokart Foods – Bulk Food Ordering Application:</strong> Directed the full-stack development. Coordinated backend operations for order management and ensured that various APIs were created to meet project requirements.</p>
          <p><strong>IWW India – Online Bookstore:</strong> Managed operations including online content management and data provision for client analysis. Led a team of developers, provided technical guidance, and ensured timely project delivery while maintaining high-quality standards.</p>
          <p><strong>Technologies Used:</strong> Node.js, Express, MongoDB, PostgreSQL, Redis, AWS, Docker</p>
        </>
      )
    }
  ];

  return (
    <>
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        <div className="container">
          <div className="experience-timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-dot"></div>
                <div className="experience-card">
                  <div className="experience-date">{exp.date}</div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p>{exp.shortDescription}</p>
                  <button 
                    className="read-more-btn"
                    onClick={() => setSelectedExp(exp)}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedExp && (
        <div className="modal-overlay" onClick={() => setSelectedExp(null)}>
          <div className="modal-glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedExp(null)}>✕</button>
            <div className="modal-date">{selectedExp.date}</div>
            <h2 className="modal-title">{selectedExp.title}</h2>
            <p className="modal-company">{selectedExp.company}</p>
            <div className="modal-content">
              {selectedExp.fullDescription}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Experience;
