import slaiderLeft from '../../common/image/slider-left.svg'
import slaidericon from '../../common/image/slider-img1.png'
import slaiderRiht from '../../common/image/slider0right.svg'
const Slider = () => {
    return (
        <section class="slider d-flex">
      <img class="slider-left" src={slaiderLeft} alt="" />
      <div class="container d-flex">
        <div class="slider-image d-flex">
          <div class="hover-text-one">
            <figure class="effect-text-one">
              <img src={slaidericon} alt=""/>
                <figcaption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </figcaption>			
             </figure>
          </div>
          <div class="hover-text-one">
            <figure class="effect-text-one">
              <img src={slaidericon} alt=""/>
                <figcaption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </figcaption>			
             </figure>
          </div>
          <div class="hover-text-one">
            <figure class="effect-text-one">
              <img src={slaidericon} alt=""/>
                <figcaption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </figcaption>			
             </figure>
          </div>
        </div>
      </div>
      <img class="slider-right" src={slaiderRiht} alt="" />
    </section>
    )
}
export default Slider