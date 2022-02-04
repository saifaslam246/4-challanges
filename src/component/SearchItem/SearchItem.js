import React, { useEffect, useState } from "react";
import axios from "axios";
function SearchItem() {
  const [value, setvalue] = useState("programing");
  const [result, setresult] = useState([]);
  const onChangeValue = (event) => {
    const finalvalue = event.target.value;
    setvalue(finalvalue);
  };
  const onClickValue = (event) => {
    event.target.value = "";
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    const searchValue = async () => {
      const data = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: value,
        },
      });
      setresult(data.data.query.search);
    };
    const timeOutId = setTimeout(() => {
      searchValue();
    }, 500);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [value]);
  const saif = result.map((result) => {
    return (
      <div key={result.pageid} className="ui card">
        <div className="content">
          <a className="header">{result.title}</a>
          <div className="description">
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          </div>
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
          >
            go
          </a>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="main-search">
        <form onSubmit={onSubmitForm}>
          <div className="ui left icon input">
            <input
              type="text"
              placeholder="Search..."
              value={value}
              onChange={onChangeValue}
              onClick={onClickValue}
            />
            <i className="search icon"></i>
          </div>
        </form>
        {saif}
      </div>
    </>
  );
}
export default SearchItem;
