import React from "react";
import { useState } from "react";
import { SortLabel } from "../../common/svg/SortLabel";

export const Sort = ({ sortTypes,onSortData,activeSortType }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const activeLable = sortTypes.find(el => el.type === activeSortType).name
  
    const onVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
    const onSelectedSort = (index) => {
        if (onSortData) {
          onSortData(index)
      }
      onVisiblePopup(index);
      
  };
  return (
    <div className="sort">
      <div onClick={onVisiblePopup} className="sort__label">
        <SortLabel/>
        <b>Сортировка по:</b>
              <span>{activeLable}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {sortTypes.map((item, index) => (
              <li
                key={index}
                    className={ activeSortType === index ? "active" : ''}
                onClick={() => onSelectedSort(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
