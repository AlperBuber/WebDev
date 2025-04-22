import { useState } from "react";
import { sculptureList } from "./data";

function ReactState() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let sculpture = sculptureList[index];

  function handlePrevClick() {
    setShowMore(false);
    {
      index == 0 ? setIndex(sculptureList.length - 1) : setIndex(index - 1);
    }
  }
  function handleNextClick() {
    setShowMore(false);
    {
      index == sculptureList.length - 1 ? setIndex(0) : setIndex(index + 1);
    }
  }

  return (
    <>
      <div className="buttons">
        <button onClick={handlePrevClick}>Geri</button>
        <button onClick={handleNextClick}>İleri</button>
      </div>

      <h2>
        <i>
          {sculpture.name} by {sculpture.artist}
        </i>
      </h2>
      <h3>
        {index + 1} of {sculptureList.length}
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <div>
        <button
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? "Hide" : "Show"} Details
        </button>
      </div>
      {showMore == true && <p>{sculpture.description}</p>}
    </>
  );
}

export default ReactState;
