import React from "react";
import "./Readme.css";
import ReactModal from "react-modal-resizable-draggable";

class Socials extends React.Component {
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
            <img src="/images/notepad.png" alt="" />
            <p style={this.props.handleFontColor()}>Readme.txt</p>
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
                <h3>Socials</h3>
              </div>
              <div className="modal-body">
                <h1>Hello</h1>
              </div>
            </div>
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default Socials;
