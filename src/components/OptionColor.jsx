import React, {useState} from 'react';
import styles from '../styles/OptionColor.module.css';

const OptionColor = () => {

   const colorsArray = ['Red', 'Black'];

   /* STATES */
   const [colors, setColors] = useState(colorsArray);

   return (
      <div className={styles.container}>
         <h4>Color: </h4>
         <div className={styles.colors}>
            {
               colors.map((color, index) => (
                  <div className={styles.contCircleColor}>
                     <div className={styles.circleColor} style={{backgroundColor: color}} />
                  </div>
               ))
            }
         </div>
      </div>
   );
};

export default OptionColor;
