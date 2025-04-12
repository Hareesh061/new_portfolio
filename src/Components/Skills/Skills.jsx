import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';


import cppImg from '../../assets/skills/c-.png';
import jsImg from '../../assets/skills/js.png';
import htmlImg from '../../assets/skills/html-5.png';
import cssImg from '../../assets/skills/css-3.png';
import tailwindImg from '../../assets/skills/tailwind.png';
import bootstrapImg from '../../assets/skills/bootstrap.png';
import gitImg from '../../assets/skills/git.png';
import reactImg from '../../assets/skills/react.png';
import pythonImg from '../../assets/skills/python.png';
import mysqlImg from '../../assets/skills/mysql.png';
import nodeImg from '../../assets/skills/nodejs.png';
import mongoImg from '../../assets/skills/mongodb.png';
import officeImg from '../../assets/skills/office.png';
import awsImg from '../../assets/skills/aws.png';
import expressImg from '../../assets/skills/express.png';

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  const allSkills = [
    { name: 'C++', image: cppImg },
    { name: 'JavaScript', image: jsImg },
    { name: 'HTML', image: htmlImg},
    { name: 'CSS', image: cssImg },
    { name: 'Tailwind', image:tailwindImg},
    { name: 'Bootstrap', image: bootstrapImg},
    { name: 'Git', image:  gitImg },
    { name: 'React', image: reactImg },
    { name: 'Python', image: pythonImg },
    { name: 'MySQL', image: mysqlImg },
    { name: 'Node.js', image: nodeImg},
    { name: 'MongoDB', image: mongoImg},
    { name: 'Office', image: officeImg},
    { name: 'AWS', image: awsImg  },
    { name: 'Express', image: expressImg  }

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
