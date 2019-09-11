import React from "react";
import "./Topbar.css";
import ReactModal from "react-modal-resizable-draggable";

class Modal extends React.Component {
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
        <button onClick={this.openModal}>About</button>
        <ReactModal
          initWidth={400}
          initHeight={400}
          onRequestClose={this.closeModal}
          isOpen={this.state.modalIsOpen}
        >
          <div className="a-header">
            <button onClick={this.closeModal}>X</button>
            <h3>About</h3>
          </div>
          <img src="clifton.gif" alt="" />
          <div className="about-body">
            <p>
              Welcome to my portfolio page, feel free to explore the
              applications that I have created.
            </p>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
