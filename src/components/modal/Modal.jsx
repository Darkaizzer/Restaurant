import React from 'react'
import './Modal.css'
import modalIcon from '../common/image/modal.png'
import modalT from '../common/image/modal-t.svg'
import modalT1 from '../common/image/modal-t1.svg'
import modalT2 from '../common/image/modal-t2.svg'
import modalT3 from '../common/image/modal-t3.svg'
import Button from '../common/button/Button'
export const Modal = () => {
  return (
    <div className="modal-wrapper">
    <div className="modal d-flex">
      <div className="d-flex">
        <img src={modalIcon} alt="" />
        <div>
          <div className="modal-info d-flex">
            <h3 className="pizza-block__title">Карбонара</h3>
            <div className="pizza-block__selector">
              <ul>
                <li className="active">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
          </div>
          <p className="add-type-text">Добавьте по вкусу</p>
          <div className="modal-choose-type d-flex">
            <div>
              <div>
                <img src={modalT} alt="" />
              </div>
              <p>Ветчина из цыпленка</p>
            </div>
            <div>
              <div>
                <img src={modalT1} alt="" />
              </div>
              <p>Ветчина из цыпленка</p>
            </div>
            <div>
              <div>
                <img src={modalT2} alt="" />
              </div>
              <p>Ветчина из цыпленка</p>
            </div>
            <div>
              <div>
                  <img src={modalT3} alt="" />
              </div>
              <p>Ветчина из цыпленка</p>
            </div>
          </div>
        </div>
      </div>
        <Button> save</Button>
        <Button> edit</Button>
      <button className="button modal-btn">Добавить</button>
    </div>
  </div>
  )
}
export default Modal
