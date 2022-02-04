import React, { useState } from "react";
function Accordion({ question, answer, index }) {
  const [activeIndex, setactiveIndex] = useState();
  const saif = () => {
    setactiveIndex(index);
    console.log(index);
  };
  const active = index === activeIndex ? "active" : "close";
  return (
    <>
      <div onClick={() => saif(index)} className="ui styled fluid accordion">
        <div className={`title ${active}`}>
          <i className="dropdown icon"></i>
          {question}
        </div>
        <div className={`content ${active}`}>
          <p>{answer} </p>
        </div>
      </div>
    </>
  );
}
export default Accordion;
