import React from 'react';
import styles from '../styles/Header.module.css';
import {BsCart3} from 'react-icons/bs';

const Header = () => {
   return (
      <div className={styles.container}>
         <h1 className={styles.title}>GradiTEST</h1>
         <div className={styles.cart}>
            <BsCart3
               size={25}
            />
            <span className={styles.badge}>1</span>
         </div>
      </div>
   );
};

export default Header;
