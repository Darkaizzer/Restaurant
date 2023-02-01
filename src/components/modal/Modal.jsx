import React from "react";
import "./Modal.css";
import modalT from "../common/image/modal-t.svg";
import modalT1 from "../common/image/modal-t1.svg";
import modalT2 from "../common/image/modal-t2.svg";
import modalT3 from "../common/image/modal-t3.svg";
import { useState } from "react";
import cn from "classnames";

export const Modal = ({ activeModal, setActiveModal, madalId, onAddData }) => {
  const avaiLableTypes = ["тонкое", "традиционное"];
  const avaiLablesizes = ["20", "30", "40"];
  const [activeTupes, setActiveTypes] = useState(0);
  const [activeSazes, setActiveSizes] = useState(0);
  const [activeTastes, setActiveTastes] = useState(0);
  const avaiLableTastes = [
    {
      name: "Ветчина из цыпленка",
      img: modalT,
    },
    {
      name: "Холопенье",
      img: modalT1,
    },
    {
      name: "Больше сыра",
      img: modalT2,
    },
    {
      name: "С морепродуктами",
      img: modalT3,
    },
  ];

  const selectetTaste = (index) => {
    setActiveTastes(index);
  };

  const selectedTupes = (index) => {
    setActiveTypes(index);
    console.log(index);
  };

  const selectedSazes = (index) => {
    setActiveSizes(index);
  };

  const onAdd = () => {
    const addedData = {
      id: madalId.id,
      name: madalId.name,
      modalImage: madalId.modalImage,
      price: madalId.price,
      count: madalId.count,
      type: avaiLableTypes[activeTupes],
      size: avaiLablesizes[activeSazes],
      tastes: avaiLableTastes[activeTastes],
    };
    onAddData(addedData);
    console.log(addedData);
  };
  return (
    <div
      className={activeModal ? "modal-wrapper active " : "modal-wrapper"}
      onClick={() => setActiveModal(true)}
    >
      <div className="modal d-flex" onClick={(e) => e.stopPropagation()}>
        <div className="d-flex">
          <img src={madalId && madalId.modalImage} alt="" />
          <div>
            <div className="modal-info d-flex">
              <h3 className="pizza-block__title">{madalId && madalId.name}</h3>
              <div className="pizza-block__selector">
                <ul>
                  {avaiLableTypes.map((type, index) => (
                    <li
                      key={type.id}
                      onClick={() => selectedTupes(index)}
                      className={cn({
                        active: activeTupes === index,
                      })}
                    >
                      {type}
                    </li>
                  ))}
                </ul>
                <ul>
                  {avaiLablesizes.map((size, index) => (
                    <li
                      key={size.id}
                      onClick={() => selectedSazes(index)}
                      className={cn({
                        active: activeSazes === index,
                      })}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="add-type-text">Добавьте по вкусу</p>
            <div className="modal-choose-type d-flex">
              {avaiLableTastes.map((taste, index) => (
                <div
                  key={taste.id}
                  onClick={() => selectetTaste(index)}
                  className={cn({
                    active: activeTastes === index,
                  })}
                >
                  <div>
                    <img src={taste.img} alt="" />
                  </div>
                  <p>{taste.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="button modal-btn" onClick={onAdd}>
          Добавить
        </button>
      </div>
    </div>
  );
};
export default Modal;
