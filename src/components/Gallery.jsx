import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import TextoAnimado from './TextoAnimado';

const Gallery = () => {
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
    <div>
      <TextoAnimado
        ref={inViewRef} 
        text="gallery."
        inView={inView} 
      />
      </div>
      <motion.div id="gallery" ref={inViewRef} 
         initial="hidden"
         animate={inView ? "visible" : "hidden"} 
         variants={variants}
         className="gallery">
        <img className="gallery_img" src="/img/tattoo.jpg" alt="" />
        <img className="gallery_img" src="/img/tattoo2.jpg" alt="" />
        <img className="gallery_img" src="/img/tattoo3.jpg" alt="" />
        <img className="gallery_img" src="/img/tattoo4.jpg" alt="" />
        <img className="gallery_img" src="/img/tattoo5.jpg" alt="" />
        <img className="gallery_img" src="/img/tattoo6.jpg" alt="" />
      </motion.div>
      
      
    </>
  );
};

export default Gallery;
