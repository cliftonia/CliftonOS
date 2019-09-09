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
        <button onClick={this.openModal}>about</button>
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
          <div className="about-body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit ipsam illum a aliquid eos veritatis necessitatibus
              quis eligendi rem debitis ipsa quidem, architecto, harum veniam
              nam ex ullam repellendus obcaecati!
            </p>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
