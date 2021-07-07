import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CreatePlaylist from "./CreatePlaylist.jsx";

function Playlist() {
  const [alreadyHavePlaylist, setAlreadyHavePlaylist] = useState([]);

  const redirectionToCreatePlaylistUrl = "library/create";

  const history = useHistory();

  const url = "http://localhost:5000/playlists";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlreadyHavePlaylist(data);
      });
  }, []);

  if (alreadyHavePlaylist.length === 0) {
    return <CreatePlaylist />;
  }

  return (
    <>
      {alreadyHavePlaylist.map(({ id, title }) => (
        <Link key={id} to={`/playlists/${id}`} className="link">
          {title}
        </Link>
      ))}
      <button
        type="button"
        className="button okButton"
        onClick={() => {
          history.push(redirectionToCreatePlaylistUrl);
        }}
      >
        Créer une nouvelle playlist
      </button>
    </>
  );
}

export default Playlist;
