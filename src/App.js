import {useEffect, useState} from "react";
import './styles/global.module.css';
import Layout from "./components/Layout";
import Carousel from "./components/Carousel";
import InformationProduct from "./components/InformationProduct";

const App = () => {

   /* STATES */
   const [response, setResponse] = useState(undefined);

   /* USE EFFECT */
   useEffect( () => {
      (async() => {
         const resp = await fetch("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js", {

         });
         const result = await resp.json();
         setResponse(result);
      })();
   }, []);

   if(response === undefined) return null;

   return (
      <Layout>
         <Carousel
            imagesArray={response.images}
         />
         <InformationProduct
            information={response}
         />
      </Layout>
   );
}

export default App;


