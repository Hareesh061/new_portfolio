import React from 'react';
import './Experience.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


const timelineData = [

  {
    title: 'Web Development Intern',
    location: 'Bangalore, India',
    description:
      'I completed one month web development internship at UnifiedMentors',
    icon: '💼',
    date: 'Jun 2024 - July 2024',
    direction: 'left',
  },
  {
    title: 'B.Tech',
    location: 'Bangalore, India',
    description: 'Computer Science graduate at JSSATEB',
    icon: '🎓',
    date: 'Aug 2019 - Jun 2023',
    direction: 'right',
  }
  ,
  {
    title: 'Internship',
    location: 'Bangalore, India',
    description:
      "Done two month internship at SmartInternz in Android Development",
    icon: '📊',
    date: 'Aug 2022 - Oct 2022',
    direction: 'left',
  },
];

const Experience = () => {
  return (
    <div className="experience-container" id="Ex">
      <h2 className="experience-title">My Experience</h2>
      <div className="experience-timeline">
      {timelineData.map((item, index) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({
        opacity: 0,
        x: item.direction === 'left' ? -100 : 100,
      });
    }
  }, [controls, inView, item.direction]);

  return (
    <motion.div
      ref={ref}
      key={index}
      className={`experience-item ${item.direction}`}
      initial={{
        opacity: 0,
        x: item.direction === 'left' ? -100 : 100,
      }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div className="experience-content">
        <h3>{item.title}</h3>
        <p>{item.location}</p>
        <p>{item.description}</p>
      </div>
      <div className="experience-icon">{item.icon}</div>
      <span className="experience-date">{item.date}</span>
    </motion.div>
  );
})}

      </div>
    </div>
  );
};

export default Experience;
