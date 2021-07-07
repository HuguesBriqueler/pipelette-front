import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import CapsuleDisplay from "../components/CapsuleDisplay.jsx";

function Capsule() {
  const [alreadyHaveCapsule, setAlreadyHaveCapsule] = useState([]);

  const history = useHistory();
  const { id } = useParams();

  const url = `http://localhost:5000/playlists/${id}/capsules`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
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
      <button
        type="button"
        onClick={() => {
          history.push("/library");
        }}
      >
        Retour
      </button>
      <button
        type="button"
        onClick={() => {
          history.push(`/playlists/${id}/create`);
        }}
      >
        Créer une nouvelle capsule dans cette playlist
      </button>
    </>
  );
}

export default Capsule;
