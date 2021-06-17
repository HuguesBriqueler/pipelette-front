import React from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import "../CSS/RecentCapsules.css";
import "../CSS/Create.css";

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recordState: null,
      audioData: null,
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

    return (
      <div>
        <h1>Studio Pipelette</h1>
        <h2 id="audioInstructions">Enregitrez votre capsule sonore</h2>
        <button type="button"></button>
      </div>
    );
  }
}

export default Create;
