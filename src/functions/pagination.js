import React, { useState, useEffect } from "react";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  },[counter,showPerPage]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="d-flex justify-content-around mb-5 mt-5">
      <button className="btn btn-outline-danger " onClick={() => onButtonClick("prev")}>
        {counter-1}<i className="fa-solid fa-arrow-left"></i>Previous
      </button>
      <button className="btn btn-outline-info" onClick={() => onButtonClick("next")} style={{width:100}}>
        Next<i className="fa-solid fa-arrow-right"></i>{counter}
      </button>
    </div>
  );
};

export default Pagination;