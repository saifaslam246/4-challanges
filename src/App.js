import React from "react";
import "./App.css";
import Menu from "./component/Menu";
import Main from "./component/Accordian/Main";
import SearchItem from "./component/SearchItem/SearchItem";
import DropMain from "./component/dropdown/DropMain";
import MainYoutube from "./component/Youtube/MainYoutube";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Menu />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/Search" element={<SearchItem />} />
            <Route exact path="/Language" element={<DropMain />} />
            <Route exact path="/youtube" element={<MainYoutube />} />
            <Route component={Error} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
