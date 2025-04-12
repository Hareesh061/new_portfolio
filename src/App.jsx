import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import myimg from './assets/img.jpg'
import my_img from './assets/my_img.jpg'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Project from './Components/Projects/Project';
import Footer from './Components/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Experience from './Components/Experience/Experience';


const App = () => {


const aboutControls = useAnimation();
const [ref, inView] = useInView({
  threshold: 0.3, 
});

useEffect(() => {
  if (inView) {
    aboutControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    });
  } else {
    aboutControls.start({
      opacity: 0,
      y: 50,
      transition: { duration: 0.5, ease: 'easeIn' }
    });
  }
}, [inView, aboutControls]);


  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme: 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme', theme)
  },[theme])



  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <div className="head">
    <div className="content">
      <motion.div
        className="name"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Hi there,</h2><h1 className="glow-name">I'm <span className="glow">Hareesh Naik</span>.</h1>
        <br/>
        <h3 className='co'>A passionate learner from India</h3>
        <div className="buttons">
  <a href="https://drive.google.com/file/d/1SAQ172L0rcNndzBdFKnOIhLD1QncqtjR/view?usp=sharing" download className="btn">
    <i className="fas fa-download"></i>Resume
  </a>
  <a href="#footer" className="btn secondary">
    <i className="fas fa-envelope"></i> Contact Me
  </a>
</div>
      </motion.div>

      <motion.div
  className="ig"
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1, y: [0, -20, 0] }}
  transition={{
    x: { duration: 1 },
    opacity: { duration: 1 },
    y: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
>
  <img src={myimg} alt="Hareesh Naik" />
</motion.div>




        </div>
      </div>

      <div className='about' id="about">
  <h3 className='ab'>About Me</h3>
  <motion.div
    ref={ref}
    className="about-content"
    animate={aboutControls}
    initial={{ opacity: 0, y: 50 }}
  >
    <motion.div className="about-img">
      <img src={my_img} alt="About Hareesh Naik" />
    </motion.div>

    <motion.div className="about-text">
      <p>
      I'm a Computer Science graduate passionate about Software Development. Highly capable leader with experience in leading projects to completion. Proficient in modern technologies including C++, HTML, CSS, JS, React, SQL, Linux, and more. Adept at working under pressure and making the best of any situation.
      </p>
      <p>
      A passionate individual with excellent documentation, interpersonal, and communication skills. Self-motivated and proactive with a strong desire to learn and grow in the tech industry.
      </p>
    </motion.div>
  </motion.div>
</div>

<Education/>

<Experience/>
<div>
<Skills/>
</div>
<div>
  <Project/>
</div>

<Footer />
    </div>
    

  );
}

export default App 