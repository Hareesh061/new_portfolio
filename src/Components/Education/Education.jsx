import React, { useEffect } from 'react';
import './Education.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const educationData = [
  {
    id: 1,
    institution: 'JSSATE, Bangalore',
    degree: 'Bachelor of Engineering in Computer Science',
    period: '2019 - 2023',
    description: 'Graduated with 7.93 CGPA and completed various technical projects.'
  },
  {
    id: 2,
    institution: 'Siddartha PU College, Bhatkal',
    degree: 'PUCII-PCMB - Science',
    period: '2017 - 2019',
    description: 'Passed with 73.4%.'
  },
  {
    id: 3,
    institution: 'Govt High School Gorte',
    degree: 'SSLC',
    period: '2016 - 2017',
    description: 'Completed my high school education with distinction(90.24%).'
  }
];

const Education = () => {
  const [lineRef, lineInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="education-section" id="education">
      <h3 className='edu'>Education</h3>
      <div className="timeline-wrapper">
        <motion.div
          ref={lineRef}
          className="timeline-line"
          initial={{ height: 0 }}
          animate={lineInView ? { height: '100%' } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className="timeline-container">
          {educationData.map((edu, index) => {
            const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
            const controls = useAnimation();

            useEffect(() => {
              if (inView) {
                controls.start({
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.2 }
                });
              }
            }, [inView, controls, index]);

            return (
              <motion.div
                key={edu.id}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                className="timeline-item"
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4>{edu.institution}</h4>
                  <h5>{edu.degree}</h5>
                  <span>{edu.period}</span>
                  <p>{edu.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
