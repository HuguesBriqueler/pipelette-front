import React from "react";
// import styled from "styled-components";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import "../CSS/RecentCapsules.css";
import "../CSS/Create.css";

// const Section = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   height: 50vh;
// `;

// const ColumnLeft = styled.div`
//   display: flex;
//   row-gap: 10px;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   h1 {
//     margin-bottom: 0.5rem;
//     font-size: 1.2rem;
//   }
// `;

// const ColumnRight = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

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
          <button className="recordButtons" id="record" onClick={this.start}>
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
    );
  }
}

export default Create;
