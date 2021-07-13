import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import "../CSS/PlaylistAndCapsule.scss";

function Capsule() {
  const [alreadyHaveCapsule, setAlreadyHaveCapsule] = useState([]);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/playlists/${id}/capsules`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAlreadyHaveCapsule(data);
      });
  }, [id]);

  if (alreadyHaveCapsule.length === 0) {
    return (
      <>
        <h1>
          Vous n&apos;avez pas encore créé de Capsule, veuillez en créer une.
        </h1>
        <div className="capsuleCardDisplay">
          <button
            type="button"
            className="button okButton"
            id="playlistButton"
            onClick={() => {
              history.push(`/playlists/${id}/create`);
            }}
          >
            Créer une nouvelle capsule
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="wrapper">
        {alreadyHaveCapsule.map((capsule) => (
          <div className="capsuleCardDisplay" key={capsule.id}>
            <p id="capsuleCss">{capsule.audio_title}</p>
            <audio
              controls
              src={`http://localhost:5000/uploads/${capsule.audio_path}.wav`}
            ></audio>
          </div>
        ))}
        <div className="capsuleCardDisplay">
          <button
            type="button"
            className="button okButton"
            id="playlistButton"
            onClick={() => {
              history.push(`/playlists/${id}/create`);
            }}
          >
            Créer une nouvelle capsule
          </button>
        </div>
      </div>
    </>
  );
}

export default Capsule;
