import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStop,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="wrapper">
        {alreadyHaveCapsule.map((capsule) => (
          <div className="capsuleCardDisplay" key={capsule.id}>
            <p id="capsuleCss">{capsule.audio_title}</p>
            <div className="interactiveButtons">
              <button type="button" className="btns">
                <FontAwesomeIcon icon={faPlay} />
              </button>
              <button type="button" className="btns">
                <FontAwesomeIcon icon={faPause} />
              </button>
              <button type="button" className="btns">
                <FontAwesomeIcon icon={faStop} />
              </button>
              <button type="button" className="btns">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="button okButton"
        id="playlistButton"
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
