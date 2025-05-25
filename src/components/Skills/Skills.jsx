import React from 'react';
import './Skills.css'; // Assuming you have or will create this for specific skill styling

const Skills = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js",
    "Express.js", "MongoDB", "Python", "Java", "Git"
    // Add or remove skills as needed
  ];

  return (
    <section id="skills" className="skills-section"> {/* Ensure this class is present */}
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;