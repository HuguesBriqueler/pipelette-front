import React from "react";
import ReactPlayer from "react-player";
import "../CSS/Home.css";
import Pipelette from "../video/Pipelette.mp4";

function Home() {
  return (
    <div>
      <h1>Pour dire Je T&apos;aime, Merci, Félicitations.</h1>
      <ReactPlayer
        className="VideoPlayer"
        controls
        width="100vw"
        url={Pipelette}
      />
    </div>
  );
}

export default Home;
