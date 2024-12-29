import TextoAnimado from "./TextoAnimado"
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"

const About = () => {
  
  const { inView, ref: inViewRef } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  


  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };
  return (
    <>
     <TextoAnimado
                    ref={inViewRef} 
                    text="about."
                    inView={inView} 
                  />
    
    <div id="about" className="about-container">
        <motion.img
         ref={inViewRef} 
         initial="hidden"
         animate={inView ? "visible" : "hidden"} 
         variants={variants}
         id='profile' src="/img/profile.jpg"></motion.img>
        
        <motion.p ref={inViewRef} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} className="textabout">I’m a passionate tattoo artist dedicated to bringing creativity and personal expression to life through my designs. My journey as a tattoo artist began with a love for art, and over the years, I've developed a unique style.</motion.p>
    </div>
    </>
  )
}

export default About