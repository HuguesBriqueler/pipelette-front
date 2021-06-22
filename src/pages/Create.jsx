import React from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import "../CSS/RecentCapsules.css";
import "../CSS/Create.scss";

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recordState: null,
      audioData: null,
      isRecording: false,
      microIsDisplayed: true,
    };
  }

  start = () => {
    this.setState({
      recordState: RecordState.START,
    });
  };

  pause = () => {
    this.setState({
      recordState: RecordState.PAUSE,
    });
  };

  stop = () => {
    this.setState({
      recordState: RecordState.STOP,
    });
  };

  onStop = (data) => {
    this.setState({
      audioData: data,
    });
    console.log("onStop: audio data", data);
  };

  render() {
    const { recordState } = this.state;

    const startRecording = () => {
      this.setState({
        isRecording: !this.state.isRecording,
      });
    };

    return (
      <div className="microphone">
        <h1>Studio Pipelette</h1>
        <h2 id="audioInstructions">Enregitrez votre capsule sonore</h2>
        <div>
          <section className="portfolio-experiment">
            <a type="button" id="microphone" onClick={() => startRecording()}>
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
        </div>
        {this.state.isRecording && (
          <div>
            <AudioReactRecorder
              state={recordState}
              onStop={this.onStop}
              backgroundColor="rgb(255,255,255)"
              foregroundColor="#f5bbb7"
              className="audiorecord"
            />
            <audio
              id="audio"
              controls
              src={this.state.audioData ? this.state.audioData.url : null}
            ></audio>
            <div className="recordButtonsContainer">
              <button
                className="recordButtons"
                id="record"
                onClick={this.start}
              >
                <span role="img" aria-label="play">
                  &#128308;
                </span>
              </button>
              <button className="recordButtons" id="pause" onClick={this.pause}>
                <span role="img" aria-label="pause">
                  &#9612;&#9612;
                </span>
              </button>
              <button className="recordButtons" id="stop" onClick={this.stop}>
                <span role="img" aria-label="stop">
                  &#9607;
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Create;
