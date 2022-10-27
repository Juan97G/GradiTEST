import React, {useState} from 'react';
import styles from '../styles/OptionColor.module.css';

const OptionColor = ({colorsInfo}) => {

   // const colorsArray = ['Black', 'Red'];
   const colorsArray = colorsInfo.values;

   /* STATES */
   const [colors, setColors] = useState(colorsArray);

   return (
      <div className={styles.container}>
         <h4>{colorsInfo.name}: </h4>
         <div className={styles.colors}>
            {
               colors.map((color, index) => (
                  <div className={styles.contCircleColor} key={index}>
                     <div className={styles.circleColor} style={{backgroundColor: color}} />
                  </div>
               ))
            }
         </div>
      </div>
   );
};

export default OptionColor;
