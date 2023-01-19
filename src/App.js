import "./App.css";
import AboutUsPage from "./components/aboutUsPage/AboutUsPage";
import Basket from "./components/Basket/Basket";
import EmptyBasket from "./components/Basket/emptyBasket/EmptyBasket";
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Modal from "./components/modal/Modal";
import OurMenuPage from "./components/OurMenuPage/OurMenuPage";
// import Main from "./components/main/Main";

function App() {
  return (
    <div class="wrapper">
      <Header />
      {/* <Main /> */}
      <AboutUsPage />
      {/* <OurMenuPage/> */}
      {/* <Basket/> */}
      {/* <Contact /> */}
      {/* <Modal/> */}
      {/* <EmptyBasket/> */}
      
      <Footer />
    </div>
  );
}

export default App;
