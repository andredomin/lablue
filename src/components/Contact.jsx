import TextoAnimado from "./TextoAnimado"
import { useInView } from 'react-intersection-observer';

const Contact = () => {

  const { inView, ref: inViewRef } = useInView({
    triggerOnce: true, // Solo activar la animación la primera vez que entra en vista
    threshold: 0.5, // Activar cuando el 10% del elemento esté visible
  });

  
  return (
    <>
        
        <TextoAnimado
                ref={inViewRef} 
                text="contact."
                inView={inView} 
              />
            <div id="contact">
                <form className="submit" action="" method="POST">
                    <label htmlFor="name">Nombre:</label><br />
                        <input type="text" id="name" name="name" required /><br /><br />
    
                    <label htmlFor="email">Correo Electrónico:</label><br />
                            <input type="email" id="email" name="email" required /><br /><br />

                    <label htmlFor="message">Mensaje:</label><br />
                            <textarea id="message" name="message" rows="5" required></textarea><br /><br />
    
                                <button type="submit">Enviar</button>
                </form>
         </div>
    
    </>
  )
}

export default Contact