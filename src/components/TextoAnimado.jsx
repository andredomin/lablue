import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// Usamos forwardRef para pasar el ref al div contenedor
const TextoAnimado = forwardRef(({ text, inView }, ref) => {
  const letters = text.split(""); // Divide la palabra en letras

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }, // El retraso entre las letras
    },
  };

  const child = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref} // Pasar el ref aquí para el control de inView
      className="flex section"
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Controlar la animación
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={child}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
});

TextoAnimado.propTypes = {
  text: PropTypes.string.isRequired,
  inView: PropTypes.bool.isRequired
};

TextoAnimado.displayName = 'TextoAnimado';

export default TextoAnimado;
