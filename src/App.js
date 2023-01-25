import "./App.css";
import AboutUsPage from "./components/aboutUsPage/AboutUsPage";
import Basket from "./components/Basket/Basket";
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import OurMenuPage from "./components/OurMenuPage/OurMenuPage";
import Main from "./components/main/Main";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { data } from "./components/data/data";

function App() {
  const [db, setDb] = useState(data[0].oftenOrderCards)
  const [emptyDb, setEmptyDb] = useState([])

  const totalPrice = emptyDb.reduce((prevVal,curVal) => prevVal + curVal.total * curVal.total, 0)
  const totalCount = emptyDb.reduce((prevVal,curVal) => prevVal + curVal.total * curVal.count, 0)
  const onAddData = (item) => {
    const existData = emptyDb.find(el => el.id === item.id)
    if (existData) {
      const newData = emptyDb.map(el => el.id === item.id ? { ...existData, total: existData.total + 1 } : el)
      setEmptyDb(newData)
    } else {
      const newData = [...emptyDb, { ...item, total: 1 }]
      setEmptyDb(newData)
    }
  }
  return (
    <div class="wrapper">
      <Header totalPrice={totalPrice} totalCount={totalCount } />
      <Routes>
        <Route path="/" element={<Main onAddData={onAddData} db={db} setDb={setDb} />} />
        <Route path="/menu" element={<OurMenuPage />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/basket" element={<Basket emptyDb={emptyDb} />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Routes>

      {/* <AboutUsPage /> */}
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
