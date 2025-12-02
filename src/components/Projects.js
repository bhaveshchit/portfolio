import React, { useState } from 'react';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'MyPG.Life',
      shortDescription: 'Accommodation rental platform for shared and personal rooms',
      fullDescription: (
        <>
          <p>MyPG.Life is a comprehensive accommodation rental website that simplifies the process of finding shared and personal rooms based on user preferences and budget. The platform offers a seamless browsing and booking experience tailored to meet diverse user requirements.</p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>Advanced filtering based on budget, location, and amenities</li>
            <li>Flexible pricing options and dynamic pricing models</li>
            <li>User-friendly room listings with detailed descriptions and images</li>
            <li>Secure booking and payment integration</li>
            <li>Real-time availability tracking</li>
            <li>User reviews and ratings system</li>
          </ul>
          <p><strong>Technologies:</strong> React.js, Node.js, MongoDB, Payment Gateway Integration</p>
        </>
      ),
      tags: ['React', 'Node.js', 'MongoDB', 'Payments'],
      icon: '🏢'
    },
    {
      id: 2,
      title: 'Blog Website',
      shortDescription: 'Full-stack blog platform with seamless onboarding',
      fullDescription: (
        <>
          <p>A complete blog platform featuring comprehensive frontend and backend with intuitive onboarding and powerful blog posting capabilities. Designed for content creators and writers who need an easy-to-use publishing platform.</p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>Smooth user onboarding and registration flow</li>
            <li>Rich text editor for blog post creation</li>
            <li>Category and tagging system</li>
            <li>Comment system with moderation</li>
            <li>User authentication and authorization</li>
            <li>Search and filtering capabilities</li>
            <li>SEO-optimized blog pages</li>
          </ul>
          <p><strong>Technologies:</strong> React.js, Node.js, Express, MongoDB, JWT Authentication</p>
        </>
      ),
      tags: ['React', 'Node.js', 'MongoDB', 'Authentication'],
      icon: '✍️'
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      shortDescription: 'Full-featured e-commerce site with secure payments',
      fullDescription: (
        <>
          <p>A robust e-commerce platform built with modern technologies, featuring comprehensive product management, secure payment processing, and advanced order tracking capabilities.</p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>Dynamic product listings with filtering and sorting</li>
            <li>Shopping cart with persistent storage</li>
            <li>Secure payment gateway integration</li>
            <li>Real-time order tracking</li>
            <li>User account management and order history</li>
            <li>Admin dashboard for product management</li>
            <li>Inventory management system</li>
            <li>Email notifications for orders</li>
          </ul>
          <p><strong>Technologies:</strong> React.js, Node.js, MongoDB, Stripe, Express</p>
        </>
      ),
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      icon: '🛒'
    },
    {
      id: 4,
      title: 'Manago Foods Backend',
      shortDescription: 'Backend system for food ordering and payment',
      fullDescription: (
        <>
          <p>Developed a scalable backend system for an online food ordering platform (Manago Foods) with robust order management and payment processing capabilities.</p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>Order management and tracking system</li>
            <li>Real-time payment processing</li>
            <li>Restaurant management APIs</li>
            <li>Delivery tracking integration</li>
            <li>Customer and restaurant authentication</li>
            <li>Analytics and reporting system</li>
            <li>Notification system for orders</li>
            <li>Scalable architecture for high traffic</li>
          </ul>
          <p><strong>Technologies:</strong> Node.js, Express, MongoDB, Payment Gateways, Redis</p>
        </>
      ),
      tags: ['Node.js', 'MongoDB', 'Express', 'Payments'],
      icon: '🍕'
    },
    {
      id: 5,
      title: 'InszeroSight Backend',
      shortDescription: 'Backend for data visualization and analytics',
      fullDescription: (
        <>
          <p>Created a powerful backend infrastructure for a data visualization and real-time analytics platform, enabling users to gain insights from complex datasets.</p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>Real-time data processing and aggregation</li>
            <li>Advanced analytics APIs</li>
            <li>Data visualization endpoints</li>
            <li>Custom dashboard data generation</li>
            <li>Time-series data management</li>
            <li>Performance optimization for large datasets</li>
            <li>Export functionality (CSV, PDF)</li>
            <li>User access control and permissions</li>
          </ul>
          <p><strong>Technologies:</strong> Node.js, MongoDB, Express, D3.js Integration</p>
        </>
      ),
      tags: ['Node.js', 'MongoDB', 'Analytics', 'Express'],
      icon: '📈'
    },
    {
      id: 6,
      title: 'Hesabay Pay Integration',
      shortDescription: 'Secure multi-currency payment processing',
      fullDescription: (
        <>
          <p>Integrated Hesabay Pay, a secure payment processing solution supporting multiple currencies and payment methods for various applications.</p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>Multi-currency payment support</li>
            <li>Secure transaction processing</li>
            <li>PCI compliance and data security</li>
            <li>Webhook integration for payment updates</li>
            <li>Transaction reconciliation</li>
            <li>Refund and dispute handling</li>
            <li>Payment history and reporting</li>
            <li>Support for multiple payment methods</li>
          </ul>
          <p><strong>Technologies:</strong> Node.js, REST APIs, Crypto Payments, Webhooks</p>
        </>
      ),
      tags: ['Payment Gateway', 'Node.js', 'Security', 'Crypto'],
      icon: '💰'
    },
    {
      id: 7,
      title: 'Addnex',
      shortDescription: 'Digital advertising platform with analytics',
      fullDescription: (
        <>
          <p>Developed a comprehensive digital ad platform (Addnex) featuring campaign management, analytics, and performance tracking for advertisers and publishers.</p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>Campaign creation and management</li>
            <li>Real-time ad performance analytics</li>
            <li>Targeting and segmentation options</li>
            <li>Budget management and optimization</li>
            <li>A/B testing capabilities</li>
            <li>Publisher network management</li>
            <li>Revenue tracking and reporting</li>
            <li>Dashboard with KPI visualization</li>
          </ul>
          <p><strong>Technologies:</strong> React.js, Node.js, MongoDB, D3.js, Express</p>
        </>
      ),
      tags: ['React', 'Node.js', 'MongoDB', 'Analytics'],
      icon: '📣'
    },
    {
      id: 8,
      title: 'Lehn.Life',
      shortDescription: 'Exclusive crypto store for Lehn tokens',
      fullDescription: (
        <>
          <p>Developed an exclusive e-commerce platform for Lehn.Life, specializing in cryptocurrency token sales and crypto-related products with secure blockchain integration.</p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>Crypto wallet integration</li>
            <li>Token purchase and exchange</li>
            <li>Blockchain transaction verification</li>
            <li>Real-time price feeds</li>
            <li>Secure key management</li>
            <li>Transaction history and audit logs</li>
            <li>Multi-signature support</li>
            <li>KYC/AML compliance</li>
          </ul>
          <p><strong>Technologies:</strong> React.js, Node.js, Blockchain, MongoDB, Web3</p>
        </>
      ),
      tags: ['React', 'Blockchain', 'Crypto', 'Node.js'],
      icon: '🪙'
    }
  ];

  return (
    <>
      <section id="projects" className="section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-image">{project.icon}</div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.shortDescription}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#6366f1', marginTop: '10px', fontWeight: 600 }}>
                    Click to view details →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal Popup */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>
            <div className="modal-project-icon">{selectedProject.icon}</div>
            <h2 className="modal-title">{selectedProject.title}</h2>
            <div className="modal-content">
              {selectedProject.fullDescription}
            </div>
            <div className="project-modal-tags">
              {selectedProject.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
