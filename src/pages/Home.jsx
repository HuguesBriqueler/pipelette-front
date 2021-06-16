import React from "react";
import ReactPlayer from "react-player";
import "../CSS/Home.css";
import Pipelette from "../video/Pipelette.mp4";

function Home() {
  return (
    <div>
      <h1 className="title">Pipelette</h1>
      <h2 className="slogan">
        Pour dire Je T&apos;aime, Merci, Félicitations.
      </h2>
      <div className="VideoPlayer">
        <ReactPlayer controls width="100%" url={Pipelette} />
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
