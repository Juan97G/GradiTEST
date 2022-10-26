import React, {useState} from 'react';
import styles from '../styles/Sizes.module.css';

const Sizes = () => {

   const sizesArray = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5'];

   /* STATES */
   const [sizes, setSizes] = useState(sizesArray);

   return (
      <div className={styles.container}>
         <h4>Size: </h4>
         <div className={styles.sizes}>
            {
               sizes.map((size) => (
                  <div className={styles.squareSize}>
                     <span>{size}</span>
                  </div>
               ))
            }
         </div>
      </div>
   );
};

export default Sizes;
