import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";

function Video(props) {
  console.log(props);
  return (
    <div className="col col-md-3 list-video">
      <iframe
        className="video"
        src="https://www.youtube.com/embed/jwyge5daKUQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/GFPvBaXoJxE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
export default Video;
