import React from "react";
import "./File.css";
function VideoList({ videos, onSetselect }) {
  console.log(videos);
  const videoList = videos.map((video) => {
    return (
      <div
        onClick={() => onSetselect(video)}
        key={video.id.videoId}
        className="right-column"
      >
        <div className="column">
          <img className="item-img" src={video.snippet.thumbnails.medium.url} />
          <div className="item-title">{video.snippet.title}</div>
          <div className="item-channelname">
            <h4>{video.snippet.channelTitle}</h4>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="right-column">{videoList}</div>
    </>
  );
}
export default VideoList;
