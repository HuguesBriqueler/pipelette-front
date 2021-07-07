import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import "../CSS/PlaylistAndCapsule.scss";

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
        <div className="wrapper" key={capsule.id}>
          <h1>{capsule.audio_title}</h1>
          <div className="interactiveButtons">
            <button type="button">Lire</button>
            <button type="button">pause</button>
            <button type="button">Supprimer</button>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="button okButton"
        onClick={() => {
          history.push("/library");
        }}
      >
        Retour
      </button>
      <button
        type="button"
        className="button okButton"
        id="playlistButton"
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
