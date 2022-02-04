import React, { useState } from "react";
import Search from "./Search";
import VideoDetail from "./VideoDetail";
import Api from "../../API/Api";
import VideoList from "./VideoList";
function MainYoutube() {
  const [videos, setvideos] = useState([]);
  const [select, setselect] = useState("");
  const onSubmitForm = async (value) => {
    const data = await Api.get("/search", {
      params: {
        q: value,
      },
    });
    setvideos(data.data.items);
  };
  const onSetselect = (video) => {
    console.log(video);
    setselect(video);
  };
  console.log(videos);
  return (
    <>
      <Search search={onSubmitForm} />
      <VideoList videos={videos} onSetselect={onSetselect} />
      <VideoDetail select={select} />
    </>
  );
}
export default MainYoutube;
