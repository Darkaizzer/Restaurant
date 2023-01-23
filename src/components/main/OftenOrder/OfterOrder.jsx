import { Link } from "react-router-dom";
import { data } from "../../data/data";




const OfterOrder = () => {

  return (
    <section class="often-order">
      <div class="container d-flex" id="oftenOrder">
        <h3>Часто заказывают</h3>
        <div class="often-order__cards d-flex">
          {data[0].oftenOrderCards.map((item) => (
            <div key={item.id} class="often-order__card d-flex">
              <div class="d-flex">
                <h5>{item.name}</h5>
                <p>{item.text}</p>
              </div>
              <span>от {item.price} сом</span>
            </div>
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
