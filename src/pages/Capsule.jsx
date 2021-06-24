import React, { useState, useEffect } from "react";
import CapsuleDisplay from "../components/CapsuleDisplay.jsx";

function Playlist() {
  const [alreadyHaveCapsule, setAlreadyHaveCapsule] = useState([]);

  const url = "http://localhost:5000/capsules";
  const config = {
    method: "GET",
  };

  useEffect(() => {
    fetch(url, config)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlreadyHaveCapsule(data);
      });
  }, []);

  if (alreadyHaveCapsule.length === 0) {
    return (
      <h1>
        Vous n&apos;avez oas encore créé de Capsule, veuillez en créer une.
      </h1>
    );
  }

  return (
    <>
      {alreadyHaveCapsule.map((capsule) => (
        <CapsuleDisplay key={capsule.id} title={capsule.audio_title} />
      ))}
    </>
  );
}

export default Playlist;
