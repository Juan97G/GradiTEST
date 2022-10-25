import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
   return (
      <div className={styles.container}>
         <h3>Prueba Técnica para la empresa Gradiweb</h3>
         <p>Elaborado por <span>Juan Carlos Guzmán</span></p>
      </div>
   );
};

export default Footer;
