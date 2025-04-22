import { useState } from "react";
export default function FilterButtons({ activeButton, setActiveButton }) {
  function handleFilterButtons(e) {
    setActiveButton(e.target.textContent);
  }
  return (
    <div className="filter-buttons mb-3">
      <button
        active="true"
        data-filter="all"
        className={`btn btn-sm me-1 ${
          activeButton == "all" ? "btn-primary" : "btn-dark"
        } `}
        onClick={() => setActiveButton("all")}
      >
        All
      </button>
      <button
        onClick={() => setActiveButton("incomplete")}
        data-filter="incomplete"
        className={`btn btn-sm me-1 ${
          activeButton == "incomplete" ? "btn-primary" : "btn-dark"
        } `}
      >
        Incomplete
      </button>
      <button
        onClick={() => setActiveButton("completed")}
        data-filter="completed"
        className={`btn btn-sm me-1 ${
          activeButton == "completed" ? "btn-primary" : "btn-dark"
        } `}
      >
        Completed
      </button>
    </div>
  );
}
