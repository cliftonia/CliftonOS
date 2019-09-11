import React from "react";
import "./Games.css";
import ReactModal from "react-modal-resizable-draggable";

class Games extends React.Component {
  state = { aboutIsOpen: false, themeIsOpen: false };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <div className="g-wrapper">
          <div className="m-icon" onClick={this.openModal}>
            <img
              id="g-image-icon"
              src="snes-controller-pixel-art-maker-85601.png"
              alt=""
            />
            <p style={this.props.handleFontColor()}>Games</p>
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
                <h3>Games</h3>
              </div>
              <div className="modal-body">
                <div className="g-icons">
                  <a
                    href="https://cliftonia.github.io/Tic-Tac-Toe/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="g-img" src="tictactoe.png" alt="" />
                    <p>Tic Tac Toe</p>
                  </a>
                </div>
              </div>
            </div>
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default Games;
