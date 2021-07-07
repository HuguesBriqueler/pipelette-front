import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../contexts/AuthenticationContext.jsx";

function CreatePlaylist() {
  const playlistNameInput = useRef();

  const redirectionToPlaylistUrl = "/library";
  const history = useHistory();

  const { userId } = useAuthentication();

  return (
    <>
      <form
        className="wrapper"
        onSubmit={(event) => {
          event.preventDefault();

          const playlistInfos = {
            title: playlistNameInput.current.value,
            user_id: userId,
          };

          console.log(playlistInfos);

          const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(playlistInfos),
          };
          const url = "http://localhost:5000/playlists";
          fetch(url, config)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });

          history.push(redirectionToPlaylistUrl);
        }}
      >
        <div className="form-div">
          <label htmlFor="text">Choisissez un nom pour votre playlist: </label>
          <input
            ref={playlistNameInput}
            type="text"
            name="playlistName"
            id="playlistName"
            placeholder="YourPlaylistName"
          />
        </div>
        <div className="form-div">
          <button className="button okButton">Valider</button>
        </div>
      </form>
    </>
  );
}

export default CreatePlaylist;
