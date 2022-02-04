import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <>
      <div class="ui secondary  menu">
        <Link className="active item" to="/">
          Home
        </Link>
        <Link className="active item" to="/search">
          Search
        </Link>
        <Link className="active item" to="/language">
          Language
        </Link>
        <Link className="active item" to="/youtube">
          Youtube
        </Link>
      </div>
    </>
  );
}
export default Menu;
