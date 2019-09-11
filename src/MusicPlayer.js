import React from "react";
import "./MusicPlayer.css";
import ReactModal from "react-modal-resizable-draggable";
import MediaPlayer from "./MediaPlayer";
import ReactPlayer from "react-player";

class MusicPlayer2 extends React.Component {
  state = { aboutIsOpen: false, themeIsOpen: false };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="m-player-wrapper">
        <div className="m-icon" onClick={this.openModal}>
          <img src="com.tk.lolirem.vapormusic.png" alt="" />
          <p style={this.props.handleFontColor()}>Clif Tunes</p>
        </div>
        <ReactModal
          initWidth={400}
          initHeight={400}
          onRequestClose={this.closeModal}
          isOpen={this.state.modalIsOpen}
        >
          <div className="modal-wrapper">
            <div className="a-header">
              <button onClick={this.closeModal}>X</button>
              <h3>MusicPlayer</h3>
            </div>
            <div className="modal-body">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=IR2hV-CsFoI&list=PLChZlyInWJLDqZ9-amKjalx8jtMfJjt5u"
                playing
                muted
                width="100%"
                height="50%"
              />
              <h3 className="track-info">Track info: Cliftonia - Who Dis</h3>
              <MediaPlayer />
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default MusicPlayer2;
