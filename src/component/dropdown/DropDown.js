import React, { useEffect, useRef, useState } from "react";
function DropDown({ Items, selected, onChangeSelected }) {
  const [open, setopen] = useState();
  const ref = useRef();
  const saif = Items.map((val) => {
    if (selected.value === val.value) {
      return null;
    }
    return (
      <div
        key={val.id}
        onClick={() => {
          onChangeSelected(val);
        }}
      >
        {val.label}
      </div>
    );
  });
  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setopen(false);
    });
  }, []);
  return (
    <>
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label"> select a Language</label>
          <div
            onClick={() => setopen(!open)}
            className="ui selection dropdown visible active"
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? " visible transition" : ""}`}>
              {saif}
            </div>
          </div>
        </div>
      </div>

      <div>{selected.label}</div>
    </>
  );
}
export default DropDown;
