import React from "react";
function VideoDetail({ select }) {
  if (!select) {
    return <p>loading....</p>;
  } else {
    return (
      <>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube-nocookie.com/embed/${select.id.videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </>
    );
  }
}
export default VideoDetail;
