import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";

const OfterOrder = ({db,setDb,onAddData}) => {
  const [activeModal, setActiveModal] = useState(true)
  const [madalId,setModalId] = useState(0)
   
  return (
    <section class="often-order">
      <div class="container d-flex" id="oftenOrder">
        <h3>Часто заказывают</h3>
        <div class="often-order__cards d-flex">
          {db.map((item) => (
            <Card
            onAddData={onAddData}
              key={item.id}
              index={item.id}
              {...item}
              item={item}
              madalId={madalId}
              setModalId={setModalId}
              activeModal={activeModal}
              setActiveModal={setActiveModal} />
          ))}

          {/* <div class="often-order__card d-flex">
            <div class="d-flex">
              <h5>Пицца из половинок</h5>
              <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
            </div>
            <span>от 580 сом</span>
          </div>
          <div class="often-order__card d-flex">
            <div class="d-flex">
              <h5>Пицца из половинок</h5>
              <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
            </div>
            <span>от 580 сом</span>
          </div>
          <div class="often-order__card d-flex">
            <div class="d-flex">
              <h5>Пицца из половинок</h5>
              <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
            </div>
            <span>от 580 сом</span>
          </div>
          <div class="often-order__card d-flex">
            <div class="d-flex">
              <h5>Пицца из половинок</h5>
              <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
            </div>
            <span>от 580 сом</span>
          </div>
          <div class="often-order__card d-flex">
            <div class="d-flex">
              <h5>Пицца из половинок</h5>
              <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
            </div>
            <span>от 580 сом</span>
          </div>
          <div class="often-order__card d-flex">
            <div class="d-flex">
              <h5>Пицца из половинок</h5>
              <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
            </div>
            <span>от 580 сом</span>
          </div>
          <div class="often-order__card d-flex">
            <div class="d-flex">
              <h5>Пицца из половинок</h5>
              <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
            </div>
            <span>от 580 сом</span>
          </div>
          <div class="often-order__card d-flex">
            <div class="d-flex">
              <h5>Пицца из половинок</h5>
              <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
            </div>
            <span>от 580 сом</span>
          </div>
          <div class="often-order__card d-flex">
            <div class="d-flex">
              <h5>Пицца из половинок</h5>
              <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
            </div>
            <span>от 580 сом</span>
          </div>
          <div class="often-order__card d-flex">
            <div class="d-flex">
              <h5>Пицца из половинок</h5>
              <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
            </div>
            <span>от 580 сом</span>
          </div>
          <div class="often-order__card d-flex">
            <div class="d-flex">
              <h5>Пицца из половинок</h5>
              <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
            </div>
            <span>от 580 сом</span>
          </div> */}
        </div>
        <Link to="/menu">
          <span class="button button--outline">Показать все меню</span>{" "}
        </Link>
       
      </div>
    </section>
  );
};
export default OfterOrder;
