import About from "./About/About";
import Hero from "./Hero/Hero";
import OfterOrder from "./OftenOrder/OfterOrder";
import Slide from "./Slider/Slide";
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
  sliderData
  
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
    </main>
  );
};
export default Main;
