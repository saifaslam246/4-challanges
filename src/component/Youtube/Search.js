import React, { useState } from "react";
function Search({ search }) {
  const [Inputvalue, setInputValue] = useState("");
  const onChangeValue = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    search(Inputvalue);
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <div className="ui input main-focus">
          <input
            className="s-input"
            type="text"
            placeholder="Search..."
            value={Inputvalue}
            onChange={onChangeValue}
          />
          <br />
        </div>
      </form>
    </>
  );
}
export default Search;
