import { Link } from "react-router-dom";
import MyLoader from "../../common/skeleton/Skeleton";
import Modal from "../../modal/Modal";
import { Card } from "./Card";

const OfterOrder = ({
  db,
  setDb,
  onAddData,
  modalImage,
  activeModal,
  setActiveModal,
  madalId,
  setModalId,
  onModalClick,
  setIsLoading,
  isLoading
}) => {
  return (
    <section class="often-order">
      <div class="container d-flex" id="oftenOrder">
        <h3>Часто заказывают</h3>
        <div class="often-order__cards d-flex">
          {
            isLoading
              ?
              [...new Array(12)].map(item => <MyLoader key={ item} />) 
                :
            db.map((item) => (
              <Card
                onModalClick={onModalClick}
                onAddData={onAddData}
                key={item.id}
                index={item.id}
                {...item}
                item={item}
                madalId={madalId}
                setModalId={setModalId}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
              />
            ))   
        }

         
        </div>
        <Modal
          onAddData={onAddData}
          madalId={madalId}
          setModalId={setModalId}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
        <Link to="/menu">
          <span class="button button--outline">Показать все меню</span>{" "}
        </Link>
      </div>
    </section>
  );
};
export default OfterOrder;
