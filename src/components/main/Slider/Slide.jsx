import slaiderLeft from "../../common/image/slider-left.svg";
// import slaidericon from '../../../../public/image/slider-img1.png'
import slaiderRiht from "../../common/image/slider0right.svg";
import Slider from "react-slick";
import { data } from "../../data/data";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <section className="slider d-flex">
      <img class="slider-left" src={slaiderLeft} alt="" />
      <div class="container">
        <div class="slider-image">
          <Slider {...settings}>
            {data[1].sliderCardData.map((item) => (
              <div className="hover-text-one">
                <figure className="effect-text-one">
                  <img src={item.img} alt="" />
                  <figcaption>
                    <p>
                     {item.text}
                    </p>
                  </figcaption>
                </figure>
              </div>
            ))}

            {/* <div className="hover-text-one">
              <figure className="effect-text-one">
                <img src={slaidericon} alt="" />
                <figcaption>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </figcaption>
              </figure>
            </div>
            <div className="hover-text-one">
              <figure className="effect-text-one">
                <img src={slaidericon} alt="" />
                <figcaption>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </figcaption>
              </figure>
            </div>  */}
          </Slider>
        </div>
      </div>
      <img className="slider-right" src={slaiderRiht} alt="" />
    </section>
  );
};
export default Slide;
