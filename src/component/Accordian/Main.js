import React from "react";
import Accordion from "./Accordion";
import Item from "./Item";
function Main() {
  return (
    <div className="App">
      {Item.map((val, index) => {
        return (
          <div key={val.id}>
            <Accordion
              question={val.question}
              answer={val.answer}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Main;
