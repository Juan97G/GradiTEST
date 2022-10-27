import React, {useState} from 'react';
import styles from '../styles/Carousel.module.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const Carousel = ({imagesArray}) => {

   //const images = ['product-1.jpg', 'product-2.webp', 'product-3.webp', 'product-4.webp'];
   const images = imagesArray;

   /* STATES */
   const [indexImage, setIndexImage] = useState(0);
   const [selectedImage, setSelectedImage] = useState(images[0]);

   /* FUNCTIONS */
   const selectImage = (index, arrayImages, next = true) => {
      const condition = next ? indexImage < (images.length - 1) : indexImage > 0;
      const nextIndex = next ? (condition ? indexImage + 1 : 0) : condition ? indexImage - 1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setIndexImage(nextIndex);
   }

   const previousImage = () => {
      selectImage(indexImage, images, false);
   }

   const nextImage = () => {
      selectImage(indexImage, images);
   }

   return (
      <div className={styles.container}>
         <div className={styles.buttonsCarousel}>
            <SlArrowLeft
               size={"10%"}
               onClick={() => previousImage()}
               style={{cursor: 'pointer'}}
            />
            <SlArrowRight
               size={"10%"}
               onClick={() => nextImage()}
               style={{cursor: 'pointer'}}
            />
         </div>
         <div className={styles.imagesCarousel}>
            <img
               src={`https:${selectedImage.split('?')[0]}`}
               alt=""
            />
         </div>
      </div>
   );
};

export default Carousel;
