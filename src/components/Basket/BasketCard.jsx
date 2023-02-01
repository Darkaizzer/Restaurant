import React from "react";
import { CartRemuveSvg } from "../common/svg/CartRemuveSvg";
import { SvgMinus } from "../common/svg/SvgMinus";
import { SvgPlus } from "../common/svg/SvgPlus";

export const BasketCard = ({
  totalCount,
  el,
  totalPrice,
  item,
  id,
  name,
  price,
  onAddData,
  modalImage,
  count,
  onClearCardData,
  onDeleteData,
  type,
  size,
  tastes,
  onRemoveItem,
}) => {
  return (
    <div key={id} className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={modalImage} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          то{type} тесто,{size} см. ,{tastes.name}
        </p>
      </div>
      <div className="cart__item-count">
        <div
          onClick={() => onDeleteData(item)}
          className="button button--outline button--circle cart__item-count-minus"
        >
          <SvgMinus />
        </div>
        <b>{item.total}</b>
        <div
          onClick={() => onAddData(item)}
          className="button button--outline button--circle cart__item-count-plus"
        >
          <SvgPlus />
        </div>
      </div>
      <div className="cart__item-price">
        <b>{item.total * price} сом</b>
      </div>
      <div onClick={() => onRemoveItem(item.id)} className="cart__item-remove">
        <div className="button button--outline button--circle">
          <CartRemuveSvg />
        </div>
      </div>
    </div>
  );
};
