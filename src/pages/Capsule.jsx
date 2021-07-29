import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAuthentication } from "../contexts/AuthenticationContext.jsx";
import "../CSS/PlaylistAndCapsule.scss";

function Capsule() {
  const [alreadyHaveCapsule, setAlreadyHaveCapsule] = useState([]);
  const { authentication } = useAuthentication();

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/playlists/${id}/capsules`;

    const config = {
      headers: {
        Authorization: `Bearer ${authentication}`,
      },
    };
    fetch(url, config)
      .then((res) => res.json())
      .then((data) => {
        setAlreadyHaveCapsule(data);
      });
  }, [id]);

  if (alreadyHaveCapsule.length === 0) {
    return (
      <>
        <p id="noCapsule">
          Vous n&apos;avez pas encore créé de capsules.
          <br />
          <br />
          Veuillez en créer une pour pouvoir les consulter.
        </p>
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
            <FontAwesomeIcon icon={faTrash} className="trash" />
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
