import React, {useState} from 'react';
import styles from '../styles/Sizes.module.css';

const Sizes = ({sizesInfo}) => {

   // const sizesArray = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5'];
   const sizesArray = sizesInfo.values;

   /* STATES */
   const [sizes, setSizes] = useState(sizesArray);

   return (
      <div className={styles.container}>
         <h4>{sizesInfo.name}: </h4>
         <div className={styles.sizes}>
            {
               sizes.map((size, index) => (
                  <div className={styles.squareSize} key={index}>
                     <span>{size}</span>
                  </div>
               ))
            }
         </div>
      </div>
   );
};

export default Sizes;
