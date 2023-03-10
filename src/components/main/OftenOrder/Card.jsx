import React from "react";
import "./OfterOrder.scss"
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
  count,
  modalImage,
  onModalClick
}) => { 
  return (
    <>
      <div
        onClick={() => onModalClick(item)}
        key={item.id}
        class="often-order__card d-flex">
        <div class="d-flex">
          <h5>{item.name}</h5>
          <p>{item.text}</p>
        </div>
        <span>от {item.price} сом</span>
      </div>
     
    </>
  );
};
export default Card 