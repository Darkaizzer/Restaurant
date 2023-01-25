import React from "react";
import { Modal } from "../../modal/Modal";
export const Card = ({
  setActiveModal,
  item,
  madalId,
  setModalId,
  activeModal,
  index,
  onAddData,
  id,
  name,
  price,
}) => {
  const onModalClick = () => {
    setActiveModal(false);
    setModalId(index);
  };
  return (
    <>
      <div
        onClick={onModalClick}
        key={item.id}
        class="often-order__card d-flex">
        <div class="d-flex">
          <h5>{item.name}</h5>
          <p>{item.text}</p>
        </div>
        <span>от {item.price} сом</span>
      </div>
      <Modal
        dataId={id}
        name={name}
        price={price}
        onAddData ={onAddData}
        madalId={madalId}
        setModalId={setModalId}
        id={item.id}
        activeModal={activeModal}
        setActiveModal={setActiveModal}/>
    </>
  );
};
