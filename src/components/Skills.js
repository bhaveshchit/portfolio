import React from 'react';
import Skills3D from './Skills3D'; // Import the new 3D component
import './Skills.css'; // Assuming you'll create a CSS file for Skills

function Skills() {
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
    <section id="skills" className="section skills-section">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-container">
        {skillsCategories.map(category => (
          <div key={category.id} className="skill-category">
            <h3>{category.icon} {category.category}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, index) => (
                <li key={index} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-proficiency">{skill.proficiency}%</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="skills-3d-container">
        <Skills3D skillsCategories={skillsCategories} />
      </div>
    </section>
  );
}

export default Skills;
