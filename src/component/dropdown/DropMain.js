import React, { useState } from "react";
import DropDown from "./DropDown";
import Converter from "./Converter";
function DropMain() {
  const Items = [
    {
      id: 1,
      label: "Hindi",
      value: "hi",
    },
    {
      id: 2,
      label: "Urdu",
      value: "ur",
    },
    {
      id: 3,
      label: "Punjabi",
      value: "pa",
    },
  ];
  const [selected, setselected] = useState(Items[0]);
  const [text, settext] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label> Enter the text</label>
          <input
            value={text}
            onChange={(event) => settext(event.target.value)}
          />
        </div>
      </div>
      <DropDown
        Items={Items}
        selected={selected}
        onChangeSelected={setselected}
      />
      <hr />
      <Converter text={text} selected={selected} />
    </div>
  );
}
export default DropMain;
