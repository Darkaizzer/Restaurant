import "./App.css";
import AboutUsPage from "./components/aboutUsPage/AboutUsPage";
import Basket from "./components/Basket/Basket";
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import OurMenuPage from "./components/OurMenuPage/OurMenuPage";
import Main from "./components/main/Main";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [db, setDb] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [emptyDb, setEmptyDb] = useState([]);
  const [activeModal, setActiveModal] = useState(true);
  const [madalId, setModalId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const totalPrice = emptyDb.reduce(
    (prevVal, curVal) => prevVal + curVal.total * curVal.price,
    0
  );
  const totalCount = emptyDb.reduce(
    (prevVal, curVal) => prevVal + curVal.total * curVal.count,
    0
  );

  const onModalClick = (index) => {
    setActiveModal(false);
    setModalId(index);
  };

  const onAddData = (item) => {
    const existData = emptyDb.find((el) => el.id === item.id);
    if (existData) {
      const newData = emptyDb.map((el) =>
        el.id === item.id ? { ...existData, total: existData.total + 1 } : el
      );
      setEmptyDb(newData);
      localStorage.setItem("basket", JSON.stringify(newData));
    } else {
      const newData = [...emptyDb, { ...item, total: 1 }];
      setEmptyDb(newData);
      localStorage.setItem(" basket", JSON.stringify(newData));
    }
  };

  const onMinusItem = (item) => {
    const existData = emptyDb.find((el) => el.id === item.id);
    if (existData.total === 1) {
      const newData = emptyDb.filter((el) => el.id !== item.id);
      setEmptyDb(newData);
      localStorage.setItem("basket", JSON.stringify(newData));
    } else {
      const newData = emptyDb.map((el) =>
        el.id === item.id ? { ...existData, total: existData.total - 1 } : el
      );
      setEmptyDb(newData);
      localStorage.setItem("basket", JSON.stringify(newData));
    }
  };

  const onRemoveItem = (id) => {
    const newData = emptyDb.filter((el) => el.id !== id);
    setEmptyDb(newData);
    localStorage.setItem("basket", JSON.stringify(newData));
  };

  const onClearCardData = () => {
    const newData = localStorage.clear();
    setEmptyDb(newData);
    setEmptyDb([]);
  };

  useEffect(() => {
    setEmptyDb(
      localStorage.getItem("basket")
        ? JSON.parse(localStorage.getItem("basket"))
        : []
    );
  }, []);

  

  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setDb(data.data[0].oftenOrderCards);
      setSliderData(data.data[1].sliderCardData);
      setMenuData(data.data[3].menuCards)
      // console.log(data.data)
      setIsLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/db.json").then(({ data }) => {
  //     setSliderData(data.data[1].sliderCardData);
  //     // console.log(data.data)
  //     setIsLoading(false);
  //   });
  // }, []);

  return (
    <div class="wrapper">
      <Header totalPrice={totalPrice} totalCount={totalCount} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              
              sliderData={sliderData}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              onModalClick={onModalClick}
              madalId={madalId}
              setModalId={setModalId}
              setActiveModal={setActiveModal}
              activeModal={activeModal}
              onAddData={onAddData}
              db={db}
              setDb={setDb}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <OurMenuPage
            setMenuData={setMenuData}
            menuData={menuData}
              db={db}
              setDb={setDb}
              onAddData={onAddData}
              onModalClick={onModalClick}
              madalId={madalId}
              setModalId={setModalId}
              setActiveModal={setActiveModal}
              activeModal={activeModal}
            />
          }
        />
        <Route path="/contacts" element={<Contact />} />
        <Route
          path="/basket"
          element={
            <Basket
              onRemoveItem={onRemoveItem}
              emptyDb={emptyDb}
              totalPrice={totalPrice}
              totalCount={totalCount}
              onAddData={onAddData}
              onClearCardData={onClearCardData}
              onDeleteData={onMinusItem}
            />
          }
        />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
