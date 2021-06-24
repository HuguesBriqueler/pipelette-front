import React, { useState, useEffect } from "react";
import PlaylistDisplay from "../components/PlaylistDisplay.jsx";

function Playlist() {
  const [alreadyHavePlaylist, setAlreadyHavePlaylist] = useState([]);

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
    return (
      <h1>
        Vous n&apos;avez pas encore créé de playlist, veuillez en créer une pour
        commencer à enregistrer vos premières capsules audios.
      </h1>
    );
  }

  return (
    <>
      {alreadyHavePlaylist.map((playlist) => (
        <PlaylistDisplay key={playlist.id} title={playlist.title} />
      ))}
    </>
  );
}

export default Playlist;
