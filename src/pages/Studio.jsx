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
      url: null,
    };
  }

  start = () => {
    this.setState({
      recordState: RecordState.START,
      isRecording: true,
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
      isRecording: false,
    });
  };

  onStop = (data) => {
    this.setState({
      audioData: data,
    });
    console.log("url", data.url);
    fetch(data.url)
      .then((response) => response.blob())
      .then((blob) => {
        console.log(blob);
        const formData = new FormData();
        formData.append("blob", blob);
        const url = "http://localhost:5000/:id/capsule_upload";
        fetch(url, {
          method: "post",
          body: formData,
        });
      });
  };

  render() {
    const { recordState } = this.state;

    return (
      <section className="microphone">
        <h1>Studio Pipelette</h1>
        <h2 id="audioInstructions">Enregitrez votre capsule sonore</h2>
        <AudioReactRecorder
          state={recordState}
          onStop={this.onStop}
          backgroundColor="rgb(255,255,255)"
          foregroundColor="#f5bbb7"
          className="audiorecord"
        />
        {this.state.isRecording ? (
          <>
            <section className="portfolio-experiment">
              <a type="button" id="stop" onClick={this.stop}>
                <p>STOP</p>
                <span className="line -right"></span>
                <span className="line -top"></span>
                <span className="line -left"></span>
                <span className="line -bottom"></span>
              </a>
            </section>
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
        <audio id="audio" controls src={this.state.audioData?.url}></audio>
      </section>
    );
  }
}

export default Create;
