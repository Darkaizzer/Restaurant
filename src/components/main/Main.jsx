import About from "./About/About";
import Hero from "./Hero/Hero";
import OfterOrder from "./OftenOrder/OfterOrder";
import Slide from "./Slider/Slide";
import "./Main.scss";
const Main = ({
  db,
  setDb,
  onAddData,
  onModalClick,
  madalId,
  setModalId,
  setActiveModal,
  activeModal,
  isLoading,
  setIsLoading,
  sliderData,
}) => {
  return (
    <main>
      <About />
      <Slide sliderData={sliderData} />
      <Hero />
      <OfterOrder
        sliderData={sliderData}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        onModalClick={onModalClick}
        madalId={madalId}
        setModalId={setModalId}
        setActiveModal={setActiveModal}
        activeModal={activeModal}
        db={db}
        setDb={setDb}
        onAddData={onAddData}
      />

      {/* test scss */}
      {/* <div className="test">
        <h1>hello from react</h1>
        <div className="test_block">
          <p>
            Lorem ipsum dolor sit, <strong>amet consectetur </strong>{" "}
            adipisicing elit. Ipsa, ab?
          </p>
          <div className="test_block_cards">
            <div className="test_block_cerd">
              <p>Test SCSS.</p>
              <button>click</button>
            </div>
            <div className="test_block_input">
              <input type="text" />
            </div>
            <div className="test_block_cerd">
              <p>Test SCSS.</p>
              <button>click</button>
            </div>
          </div>
        </div>
      </div> */}
      {/* test scss */}
    </main>
  );
};
export default Main;
