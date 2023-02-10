import React from "react";

const Pagination = ({ setCurrentPage, prevPage, totalPages }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPages / prevPage); i++) pages.push(i);

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button className=" button button--outline" onClick={()=>setCurrentPage(page)} >{page}</button>
      ))}
    </div>
  );
};

export default Pagination;
