import React, { useState, useEffect } from "react";
import PlaylistDisplay from "../components/PlaylistDisplay.jsx";

function Playlist() {
  /* Pour gérer ça, faire un fetch vers DB pour récuperer toutes les playlist, si pas de playlists,
   alors afficher h1 pour dire d'en créer, sinon afficher les playlists existantes avec toutes les
   options d'intéractions possibles: ajouter capsule à une playlist, supprimer une playlist et créer
   une nouvelle playlist. */

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
        Vous n&apos;avez oas encore créé de playliste, veuillez en créer une.
      </h1>
    );
  }
  /* Dans l'idéal: recevoir les données sous forme de tableau.
     Créer un composant affichage pour chaque éléments du tableau
     et faire un .map sur le tableau pour return ce composant */
  return (
    <>
      {alreadyHavePlaylist.map((playlist) => (
        <PlaylistDisplay key={playlist.id} title={playlist.title} />
      ))}
    </>
  );
}

export default Playlist;
