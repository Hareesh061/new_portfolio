import React from 'react'
import './Project.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const smallProjects = [
  {
    title: 'Memes app',
    description: 'Its a simple memes application where you get a n number of memes which helps to relax and have fun',
    tech: ['React', 'API'],
    image: '../src/assets/skills/meme.png',
    demo: 'https://659a7ec3d5ec3e76dec89d7e--imaginative-cat-0ba4c6.netlify.app',
  },
  {
    title: 'Archery Game',
    description: 'Its a aim game to check your AIM',
    tech: ['JavaScript', 'HTML/CSS'],
    image: '../src/assets/skills/archery.png',
    demo: 'https://hareesh061.github.io/ARCHERY-GAME',
  },
  {
    title: 'Portfolio V1',
    description: 'My very first developer portfolio!',
    tech: ['HTML', 'Tailwind CSS', 'JS','React', 'Bootstrap'],
    image: '../src/assets/skills/port.png',
    demo: 'https://65d4746f927c9bb35022283a--candid-frangollo-d21c96.netlify.app',
  },
]


const projects = [
  {
    title: 'Diabetic Retinopathy Detection',
    description: 'Used CNN with Keras to classify retinal images and detect stages of diabetic retinopathy.',
    tech: ['Python', 'Keras', 'Deep Learning'],
    image: '../src/assets/skills/dr.jpg',
    github: 'https://github.com/Hareesh061/Diabetic_Retina',
  
  },
  {
    title: 'Hospital Management System',
    description: 'Full-stack web app for managing hospital operations, patient records, and doctor scheduling.',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'Bootstrap'],
    image: '../src/assets/skills/hms.png',
    github: 'https://github.com/Hareesh061/Hospital-Management-Database-System',
  
  },
  {
    title: 'Musio.co',
    description: 'Its a music application where the info is fetched from APIs',
    tech: ['HTML', 'CSS', 'JS', 'React','AWS'],
    image: '../src/assets/skills/music.png',
    github: 'https://github.com/Hareesh061/Musio_app',
    
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const Project = () => {
  return (
    <section className="project-section" id="prog">
      <h1 className="project-title">My Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            whileHover={{ scale: 1.03 }}
          >
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-content">
              <h2 className="project-name">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span className="tech-tag" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>

            
              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">
                  <FaGithub className="btn-icon" /> GitHub
                </a>
              </div>
            </div>
            
          </motion.div>
        ))}
      </div>

      
      <h2 className="project-title small-title">Mini Projects</h2>
<div className="small-project-grid">
  {smallProjects.map((project, index) => (
   <motion.div
   className="small-project-card"
   key={index}
   initial={{ opacity: 0, scale: 0.9, y: 30 }}
   whileInView={{ opacity: 1, scale: 1, y: 0 }}
   viewport={{ once: true }}
   transition={{
     delay: index * 0.15,
     duration: 0.6,
     ease: 'easeOut',
   }}
   whileHover={{
     scale: 1.05,
     boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
   }}
 >
   <img src={project.image} alt={project.title} className="small-project-img" />
   <h3 className="small-project-name">{project.title}</h3>
   <p className="small-project-description">{project.description}</p>
   <div className="project-tech">
     {project.tech.map((tech, i) => (
       <span className="tech-tag" key={i}>
         {tech}
       </span>
     ))}
   </div>
   <div className="small-project-buttons">
     <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn">
       <FaExternalLinkAlt className="btn-icon" /> Demo
     </a>
   </div>
 </motion.div>
 
  ))}
</div>

    </section>
    
  )
}

export default Project
