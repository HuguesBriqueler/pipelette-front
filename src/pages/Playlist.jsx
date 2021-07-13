import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CreatePlaylist from "./CreatePlaylist.jsx";

import "../CSS/PlaylistAndCapsule.scss";

function Playlist() {
  const [alreadyHavePlaylist, setAlreadyHavePlaylist] = useState([]);

  const redirectionToCreatePlaylistUrl = "library/create";

  const history = useHistory();

  const url = "http://localhost:5000/playlists";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAlreadyHavePlaylist(data);
      });
  }, []);

  if (alreadyHavePlaylist.length === 0) {
    return <CreatePlaylist />;
  }

  return (
    <div className="wrapper">
      {alreadyHavePlaylist.map(({ id, title }) => (
        <div className="playlistCardDisplay" key={id}>
          <Link to={`/playlists/${id}`} className="playlistLink">
            {title}
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      ))}
      <button
        type="button"
        className="button okButton"
        id="playlistButton"
        onClick={() => {
          history.push(redirectionToCreatePlaylistUrl);
        }}
      >
        Nouvelle playlist
      </button>
    </div>
  );
}

export default Playlist;
