import { useState, useMemo } from "react";
import searchIcon from "../common/image/search-normal 1.svg";
import Pagination from "../common/pagination/Pagination";
import Card from "../main/OftenOrder/Card";
import Modal from "../modal/Modal";
import { Categories } from "./categories/Categories";
import "./OurMenuPage.css";
import { Sort } from "./sort/Sort";

const OurMenuPage = ({
  setMenuData,
  menuData,
  db,
  setDb,
  onAddData,
  madalId,
  activeModal,
  setActiveModal,
  onModalClick,
  setModalId,
}) => {
  const [selectedType, setSelectedType] = useState({ type: "rating" });
  const [searchQuary, setSearchQuary] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage] = useState(12);

  const lastPage = currentPage * prevPage;
  const firstPage = lastPage - prevPage;
  const currentMenuPage = menuData.slice(firstPage, lastPage);

  const sortTypes = [
    { name: "популярности", type: "rating" },
    { name: "цене", type: "price" },
    { name: "по алфавиту", type: "name" },
  ];

  // const getSortedValue = () => {
  //   if (selectedType) {
  //    return db.sort((a, b) => a[selectedType.type].localeCompare(b[selectedType.type]))
  //   }
  //   return db
  // }

  const sortedData = useMemo(() => {
    if (selectedType) {
      console.log(currentMenuPage)
      return [...currentMenuPage].sort((a, b) =>
        a[selectedType.type].localeCompare(b[selectedType.type])
      );
    }
    return currentMenuPage;
  }, [selectedType, currentMenuPage]);

  const sortedSearchedData = useMemo(() => {
    return sortedData.filter((el) =>
      el.name.toLowerCase().includes(searchQuary)
    );
  }, [searchQuary, sortedData]);

  const onSortData = (type) => {
    setSelectedType(type);
    // const sortedData = db.sort((a, b) => a[type.type].localeCompare(b[type.type]))
    setDb(sortedData);
  };

  return (
    <div className="wrapper">
      <main>
        <section className="about d-flex">
          <span className="about-greeting">Our menu</span>
        </section>
        <section className="search-block">
          <div className="container d-flex">
            <Categories menuData={menuData} setMenuData={setMenuData} />
            <Sort
              sortTypes={sortTypes}
              onSortData={onSortData}
              activeSortType={selectedType.type}
            />
            <div className="search d-flex">
              <input
                type="text"
                placeholder="Начать поиск"
                value={searchQuary}
                onChange={(e) => setSearchQuary(e.target.value)}
              />
              <img src={searchIcon} alt="" />
            </div>
          </div>
        </section>
        <section className="often-order">
          <div className="container d-flex">
            <div className="often-order__cards d-flex">
              {sortedSearchedData.map((el) => (
                <Card
                  onModalClick={onModalClick}
                  onAddData={onAddData}
                  key={el.id}
                  index={el.id}
                  {...el}
                  item={el}
                  madalId={madalId}
                  activeModal={activeModal}
                  setActiveModal={setActiveModal}
                />
              ))}
            </div>
            <Pagination
              
              setCurrentPage={setCurrentPage}
              prevPage={prevPage}
              totalPages={menuData.length}
            />
            <Modal
              onAddData={onAddData}
              madalId={madalId}
              setModalId={setModalId}
              activeModal={activeModal}
              setActiveModal={setActiveModal}
            />
          </div>
        </section>
      </main>
    </div>
  );
};
export default OurMenuPage;
