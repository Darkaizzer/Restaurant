import searchIcon from "../common/image/search-normal 1.svg";
import { data } from "../data/data";
import "./OurMenuPage.css";
const OurMenuPage = () => {
  return (
    <div className="wrapper">
      {/* <header className="header">
        <div className="container d-flex">
          <a href="./index.html"><img src="./image/logo.svg" alt="" /></a>
          <div className="header-links d-flex">
            <a href="./contact.html">Контакты</a>
            <a href="./ourMenu.html">Меню</a>
            <div className="header__cart">
              <a href="./basket.html" className="button button--cart">
                <span>520 сом</span>
                <div className="button__delimiter"></div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <span>3</span>
              </a>
            </div>
          </div>
        </div>
      </header> */}
      <main>
        <section className="about d-flex">
          <span className="about-greeting">Our menu</span>
        </section>
        <section className="search-block">
          <div className="container d-flex">
            <div className="categories">
              <ul>
                <li className="active">Все</li>
                <li>Мясные</li>
                <li>Вегетарианская</li>
                <li>Гриль</li>
                <li>Острые</li>
                <li>Закрытые</li>
              </ul>
            </div>
            <div className="sort">
              <div className="sort__label">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                  />
                </svg>
                <b>Сортировка по:</b>
                <span>популярности</span>
              </div>
              <div className="sort__popup">
                <ul>
                  <li className="active">популярности</li>
                  <li>цене</li>
                  <li>алфавиту</li>
                </ul>
              </div>
            </div>
            <div className="search d-flex">
              <input type="text" placeholder="Начать поиск" />
              <img src={searchIcon} alt="" />
            </div>
          </div>
        </section>
        <section className="often-order">
          <div className="container d-flex">
            <div className="often-order__cards d-flex">
              {data[2].menuCardData.map((item) => (
                <div key={item.id} className="often-order__card d-flex">
                  <div className="d-flex">
                    <h5>{item.name}</h5>
                    <p>{ item.text}</p>
                  </div>
                  <span>от {item.price} сом</span>
                </div>
              ))}

              {/* <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div> */}
            </div>
            <div className="pagination">
              <a className=" button button--outline" href="./ourMenu.html">
                1
              </a>
              <a className=" button button--outline" href="./ourMenu.html">
                2
              </a>
              <a className=" button button--outline" href="./ourMenu.html">
                3
              </a>
              <a className=" button button--outline" href="./ourMenu.html">
                4
              </a>
              <a className=" button button--outline" href="./ourMenu.html">
                5
              </a>
              <a className=" button button--outline" href="./ourMenu.html">
                6
              </a>
              <a className=" button button--outline" href="./ourMenu.html">
                7
              </a>
            </div>
          </div>
        </section>
      </main>
      {/* <footer className="footer">
        <div className="container d-flex">
          <p>
            Cliche kogi tote bag leggings, street art bushwick readymade schlitz vinyl. Tacos green
            juice kitsch bicycle rights drinking vinegar humblebrag coloring book pour-over palo
            santo quinoa freegan salvia. Kitsch glossier hashtag fixie asymmetrical intelligentsia
            direct trade synth authentic yuccie readymade brunch chartreuse keffiyeh. Craft beer
            chia listicle kinfolk af, schlitz kickstarter.
          </p>
        </div>
      </footer> */}
    </div>
  );
};
export default OurMenuPage;
