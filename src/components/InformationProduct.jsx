import React from 'react';
import styles from '../styles/InformationProduct.module.css';
import OptionColor from "./OptionColor";
import Sizes from "./Sizes";

const InformationProduct = () => {
   return (
      <div className={styles.container}>
         <h2 className={styles.title}>Free Trainer 3 / MMW</h2>
         <div className={styles.price}>
            <h3>$ 285.000</h3>
            <span>$ 358.000</span>
         </div>

         <OptionColor />

         <Sizes />

         <div className={styles.quantityAndTotal}>
            <div className={styles.containerQuantity}>
               <span>-</span>
               <span>1</span>
               <span>+</span>
            </div>
            <div className={styles.containerTotal}>
               <span>Total Price: </span>
               <span>$ 570.000</span>
            </div>
         </div>

         <div className={styles.buttons}>
            <button>
               Add to favourite
            </button>
            <button>
               Add to cart
            </button>
         </div>

         <p className={styles.textDetails}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio
            dolores doloribus eligendi, esse exercitationem fugit hic illo laudantium magnam non quam
            quibusdam quidem rerum sequi sint temporibus vel!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio
            dolores doloribus eligendi, esse exercitationem fugit hic illo laudantium magnam non quam
            quibusdam quidem rerum sequi sint temporibus vel!
         </p>

      </div>
   );
};

export default InformationProduct;
