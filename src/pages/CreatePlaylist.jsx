import React, { useRef } from "react";

function CreatePlaylist() {
  const playlistNameInput = useRef();

  return (
    <>
      <form
        className="wrapper"
        onSubmit={(event) => {
          event.preventDefault();

          const playlistInfos = {
            title: playlistNameInput.current.value,
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
