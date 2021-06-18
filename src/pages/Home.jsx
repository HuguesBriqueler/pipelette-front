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
        <ReactPlayer controls width="auto" url={videos[currentVideoIndex]} />
        <button
          className="Previous"
          type="button"
          onClick={() => setCurrentVideoIndex(currentVideoIndex - 1)}
        >
          Previous
        </button>
        <button
          className="Next"
          type="button"
          onClick={() => setCurrentVideoIndex(currentVideoIndex + 1)}
        >
          Next
        </button>
      </div>
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at quam
        reprehenderit possimus nisi, voluptate non enim ratione alias
        architecto, molestiae deleniti amet voluptates libero odio soluta
        maiores, dolor quod? Quod facilis iste id ex asperiores iusto dicta
        animi fugiat ipsam dolorum. Assumenda explicabo deserunt obcaecati iste,
        praesentium maiores nulla ut, nam quod, quidem inventore dolor
        accusantium! Iusto natus error libero{" "}
      </p>
    </div>
  );
}

export default Home;
