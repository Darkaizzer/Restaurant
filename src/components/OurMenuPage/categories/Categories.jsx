import React from "react";
import { useState } from "react";

export const Categories = ({setMenuData,menuData }) => {
  const [ CategoreFilter] = useState(menuData);
  const [activeItem, setActiveItem] = useState("");
  const availavleCategories = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const onFilterData = (item) => {
      if (item === "") {
        setMenuData(CategoreFilter)
      return;
    }
    const result = CategoreFilter.filter((el) => {
      return el.category === item;
    });
    setMenuData(result)
  };

  const onSelectCat = (index) => {
      setActiveItem(index);
      onFilterData(index);
  };
  return (
    <div className="categories">
      <ul>
        <li className={activeItem === '' ? 'active' : ''} onClick={()=>onSelectCat('')}>Все</li>
        {availavleCategories.map((item, index) => (
          <li
            className={activeItem === index ? "active" : ""}
            onClick={() => onSelectCat(index)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
