import React, { useState } from 'react';

function Skills() {
  const [expandedCategory, setExpandedCategory] = useState(1);

  const skillsCategories = [
    {
      id: 1,
      category: 'Frontend Development',
      icon: '💻',
      skills: [
        { name: 'React.js', icon: '⚛️', proficiency: 95 },
        { name: 'Next.js', icon: '▲', proficiency: 90 },
        { name: 'JavaScript', icon: '✨', proficiency: 95 },
        { name: 'ES6+', icon: '🔹', proficiency: 95 },
        { name: 'Redux', icon: '🔄', proficiency: 85 },
        { name: 'Context API', icon: '🎯', proficiency: 90 },
        { name: 'HTML5 & CSS3', icon: '🎨', proficiency: 95 },
        { name: 'Bootstrap', icon: '📦', proficiency: 85 },
        { name: 'Tailwind CSS', icon: '🌊', proficiency: 90 },
        { name: 'Three.js', icon: '🎲', proficiency: 85 },
      ]
    },
    {
      id: 2,
      category: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', icon: '🟩', proficiency: 95 },
        { name: 'Express.js', icon: '🚀', proficiency: 90 },
        { name: 'PHP', icon: '🐘', proficiency: 80 },
        { name: 'MongoDB', icon: '🍃', proficiency: 90 },
        { name: 'MySQL', icon: '🗄️', proficiency: 85 },
        { name: 'DynamoDB', icon: '☁️', proficiency: 80 },
        { name: 'PostgreSQL', icon: '🐬', proficiency: 85 },
        { name: 'REST APIs', icon: '🔌', proficiency: 95 },
        { name: 'GraphQL', icon: '📡', proficiency: 75 },
      ]
    },
    {
      id: 3,
      category: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'AWS Serverless', icon: '⚡', proficiency: 90 },
        { name: 'AWS Cognito', icon: '🔐', proficiency: 85 },
        { name: 'AWS Lambda', icon: '🔵', proficiency: 90 },
        { name: 'Firebase', icon: '🔥', proficiency: 85 },
        { name: 'Heroku', icon: '🎯', proficiency: 80 },
        { name: 'Vercel', icon: '⬜', proficiency: 90 },
        { name: 'Netlify', icon: '🟦', proficiency: 85 },
        { name: 'Docker', icon: '🐳', proficiency: 85 },
        { name: 'Linux Servers', icon: '🐧', proficiency: 80 },
      ]
    },
    {
      id: 4,
      category: 'AI Integration & APIs',
      icon: '🤖',
      skills: [
        { name: 'ChatGPT Integration', icon: '💬', proficiency: 90 },
        { name: 'DeepSeek API', icon: '🧠', proficiency: 85 },
        { name: 'Claude Integration', icon: '🎓', proficiency: 85 },
        { name: 'LLM APIs', icon: '📊', proficiency: 80 },
        { name: 'Prompt Engineering', icon: '✍️', proficiency: 85 },
        { name: 'AI Model Fine-tuning', icon: '🎛️', proficiency: 75 },
      ]
    },
    {
      id: 5,
      category: 'Development Tools & Platforms',
      icon: '🛠️',
      skills: [
        { name: 'GitHub', icon: '🐙', proficiency: 95 },
        { name: 'Jira', icon: '📋', proficiency: 90 },
        { name: 'Trello', icon: '✅', proficiency: 85 },
        { name: 'Sanity.io', icon: '📝', proficiency: 80 },
        { name: 'Git', icon: '📦', proficiency: 95 },
      ]
    },
    {
      id: 6,
      category: 'Project Management',
      icon: '📊',
      skills: [
        { name: 'Task Tracking', icon: '📌', proficiency: 90 },
        { name: 'Resource Allocation', icon: '👥', proficiency: 85 },
        { name: 'Stakeholder Communication', icon: '💬', proficiency: 90 },
        { name: 'Risk Management', icon: '⚠️', proficiency: 85 },
        { name: 'Agile Methodology', icon: '🔄', proficiency: 90 },
      ]
    },
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="container">
        <div className="skills-container">
          {skillsCategories.map((category) => (
            <div key={category.id} className="skills-category">
              <button
                className="category-header"
                onClick={() => setExpandedCategory(
                  expandedCategory === category.id ? null : category.id
                )}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.category}</span>
                <span className={`category-toggle ${expandedCategory === category.id ? 'expanded' : ''}`}>
                  ▼
                </span>
              </button>

              {expandedCategory === category.id && (
                <div className="category-skills">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-item-new">
                      <div className="skill-header">
                        <div className="skill-info">
                          <span className="skill-icon-new">{skill.icon}</span>
                          <span className="skill-name-new">{skill.name}</span>
                        </div>
                        <span className="proficiency-badge">{skill.proficiency}%</span>
                      </div>
                      <div className="proficiency-bar">
                        <div 
                          className="proficiency-fill" 
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
