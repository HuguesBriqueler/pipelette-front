import React from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
import { AuthenticationContext } from "../contexts/AuthenticationContext.jsx";

import "../CSS/RecentCapsules.css";
import "../CSS/Create.scss";

class Studio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recordState: null,
      audioData: null,
      isRecording: false,
      url: null,
      canBeSaved: false,
      isPaused: false,
    };
  }

  start = () => {
    this.setState({
      recordState: RecordState.START,
      isRecording: true,
      isPaused: false,
    });
  };

  pause = () => {
    this.setState({
      recordState: RecordState.PAUSE,
      isPaused: true,
    });
  };

  stop = () => {
    this.setState({
      recordState: RecordState.STOP,
      isRecording: false,
    });
  };

  onStop = (data) => {
    this.setState({
      audioData: data,
      canBeSaved: true,
    });
    // console.log("url", data.url);
  };

  onSave = () => {
    fetch(this.state.audioData.url)
      .then((response) => response.blob())
      .then((blob) => {
        console.log(blob);
        const formData = new FormData();
        formData.append("audio_title", this.state.capsuleName);
        if (this.props.match.params.playlistId) {
          formData.append("playlistId", this.props.match.params.playlistId);
        }
        formData.append("blob", blob);
        const url = "http://localhost:5000/capsule_upload";
        fetch(url, {
          method: "post",
          headers: {
            Authorization: `Bearer ${this.context.authentication}`,
          },
          body: formData,
        });
      });
    console.log("url", this.state.audioData.url);
  };

  onDelete = () => {
    this.setState({
      canBeSaved: false,
      recordState: null,
    });
  };

  render() {
    const { recordState } = this.state;

    return (
      <section className="microphone">
        <h1>Studio Pipelette</h1>
        <h2 id="audioInstructions">Enregitrez votre capsule sonore</h2>
        <div className="capsuleName">
          <label htmlFor="capsuleName">Titre de la capsule</label>
          <input
            name="capsuleName"
            onChange={(e) => this.setState({ capsuleName: e.target.value })}
            value={this.state.capsuleName}
          />
        </div>
        <AudioReactRecorder
          state={recordState}
          onStop={this.onStop}
          backgroundColor="rgb(255,255,255)"
          foregroundColor="#f5bbb7"
          className="audiorecord"
        />
        {this.state.isRecording ? (
          <>
            <div className="pauseStop">
              <section className="portfolio-experiment">
                <a type="button" id="stop" onClick={this.stop}>
                  <p>
                    <FontAwesomeIcon className="icon" icon={faStop} />
                  </p>
                  <span className="line -right"></span>
                  <span className="line -top"></span>
                  <span className="line -left"></span>
                  <span className="line -bottom"></span>
                </a>
              </section>
              <section className="portfolio-experiment">
                <a
                  type="button"
                  id="stop"
                  onClick={!this.state.isPaused ? this.pause : this.start}
                >
                  <p>
                    {!this.state.isPaused ? (
                      <FontAwesomeIcon className="icon" icon={faPause} />
                    ) : (
                      <FontAwesomeIcon className="icon" icon={faPlay} />
                    )}
                  </p>
                  <span className="line -right"></span>
                  <span className="line -top"></span>
                  <span className="line -left"></span>
                  <span className="line -bottom"></span>
                </a>
              </section>
            </div>
          </>
        ) : (
          <section className="portfolio-experiment">
            <a type="button" id="microphone" onClick={this.start}>
              <img
                id="audioInstructions"
                src="https://img.icons8.com/wired/64/000000/microphone.png"
              />
              <span className="line -right"></span>
              <span className="line -top"></span>
              <span className="line -left"></span>
              <span className="line -bottom"></span>
            </a>
          </section>
        )}
        {this.state.canBeSaved && (
          <>
            <button className="saveButton" onClick={this.onSave}>
              Sauvegarder
            </button>
            <button className="deleteButton" onClick={this.onDelete}>
              Supprimer
            </button>
          </>
        )}
        <audio id="audio" controls src={this.state.audioData?.url}></audio>
      </section>
    );
  }
}

Studio.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      playlistId: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

Studio.contextType = AuthenticationContext;

export default Studio;
