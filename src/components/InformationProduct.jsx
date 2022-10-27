import React, {useState} from 'react';
import styles from '../styles/InformationProduct.module.css';
import OptionColor from "./OptionColor";
import Sizes from "./Sizes";
import ModalCart from "./ModalCart";

const InformationProduct = ({information}) => {

   /* STATES */
   const [openModalCart, setOpenModalCart] = useState(false);


   /* FUNCTIONS */
   const toggleModal = () => {
      setOpenModalCart(!openModalCart);
   }


   return (
      <div className={styles.container}>
         <h2 className={styles.title}>{information.title}</h2>
         <div className={styles.price}>
            <h3>$ {information.price}</h3>
            <span>$ {information.compare_at_price}</span>
         </div>

         <OptionColor
            colorsInfo={information.options[0]}
         />

         <Sizes
            sizesInfo={information.options[1]}
         />

         <div className={styles.quantityAndTotal}>
            <div className={styles.containerQuantity}>
               <span>-</span>
               <span>1</span>
               <span>+</span>
            </div>
            <div className={styles.containerTotal}>
               <span>Total Price: </span>
               <span>$ {information.price}</span>
            </div>
         </div>

         <div className={styles.buttons}>
            <button>
               Add to favourite
            </button>
            <button
               onClick={() => toggleModal()}
            >
               Add to cart
            </button>
         </div>

         <p className={styles.textDetails}>
            {information.description}
         </p>

         <ModalCart
            openModal={openModalCart}
            toggleModal={toggleModal}
            infoProduct={information}
         />

      </div>
   );
};

export default InformationProduct;
