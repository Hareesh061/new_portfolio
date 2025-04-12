import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  const allSkills = [
    { name: 'C++', image: '../src/assets/skills/c-.png' },
    { name: 'JavaScript', image: '../src/assets/skills/js.png' },
    { name: 'HTML', image: '../src/assets/skills/html-5.png' },
    { name: 'CSS', image: '../src/assets/skills/css-3.png' },
    { name: 'Tailwind', image: '../src/assets/skills/tailwind.png' },
    { name: 'Bootstrap', image: '../src/assets/skills/bootstrap.png' },
    { name: 'Git', image: '../src/assets/skills/git.png' },
    { name: 'React', image: '../src/assets/skills/react.png' },
    { name: 'Python', image: '../src/assets/skills/python.png' },
    { name: 'MySQL', image: '../src/assets/skills/mysql.png' },
    { name: 'Node.js', image: '../src/assets/skills/nodejs.png' },
    { name: 'MongoDB', image: '../src/assets/skills/mongodb.png' },
    { name: 'Office', image: '../src/assets/skills/office.png' },
    { name: 'AWS', image: '../src/assets/skills/aws.png' },
    { name: 'Express', image: '../src/assets/skills/express.png' }

  ];

  return (
    <div className='skill' id="skill" ref={containerRef}>
      <h2 className='sh'>My Skills</h2>

      <div className="icon-grid">
        {allSkills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={skill.image} alt={skill.name} className="skill-img" />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
