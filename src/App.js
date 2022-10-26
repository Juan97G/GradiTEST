import './styles/global.module.css';
import Layout from "./components/Layout";
import Carousel from "./components/Carousel";
import InformationProduct from "./components/InformationProduct";

function App() {
  return (
    <Layout>
      <Carousel />
       <InformationProduct />
    </Layout>
  );
}

export default App;
