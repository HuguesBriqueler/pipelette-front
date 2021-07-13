import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../CSS/Home.css";
import Pipelette from "../video/Pipelette.mp4";
import Test from "../video/Test.mp4";
import Test2 from "../video/Test2.mp4";

const videos = [Pipelette, Test, Test2];

function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  return (
    <div>
      <h1 className="title">Pipelette</h1>
      <h2 className="slogan">
        Pour dire Je T&apos;aime, Merci, Félicitations.
      </h2>
      <div className="VideoPlayer">
        <ReactPlayer
          controls
          width="100%"
          height="auto"
          url={videos[currentVideoIndex]}
        />
        <button
          className="Previous"
          type="button"
          onClick={() => setCurrentVideoIndex(currentVideoIndex - 1)}
        >
          {"<"}
        </button>
        <button
          className="Next"
          type="button"
          onClick={() => setCurrentVideoIndex(currentVideoIndex + 1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Home;
