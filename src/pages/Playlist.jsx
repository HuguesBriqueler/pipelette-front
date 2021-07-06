import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CreatePlaylist from "./CreatePlaylist.jsx";
import PlaylistDisplay from "../components/PlaylistDisplay.jsx";

function Playlist() {
  const [alreadyHavePlaylist, setAlreadyHavePlaylist] = useState([]);

  const redirectionToCreatePlaylistUrl = "library/create";

  const history = useHistory();

  const url = "http://localhost:5000/playlists";
  const config = {
    method: "GET",
  };

  useEffect(() => {
    fetch(url, config)
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
      {alreadyHavePlaylist.map((playlist) => (
        <PlaylistDisplay key={playlist.id} title={playlist.title} />
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
