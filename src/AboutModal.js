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
          initWidth={700}
          initHeight={700}
          disableResize
          onRequestClose={this.closeModal}
          isOpen={this.state.modalIsOpen}
        >
          <div className="modal-wrapper">
            <div className="a-header">
              <button onClick={this.closeModal}>X</button>
              <h3>About</h3>
            </div>
            <img className="about-img" src="/images/clifton.gif" alt="" />
            <div className="modal-body">
              <p>
                Welcome to my portfolio page, feel free to explore the
                applications that I have created.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                perspiciatis voluptates deleniti numquam veritatis. Dolorum,
                illum impedit facere sed veritatis commodi aspernatur ipsa quod,
                molestiae omnis ad culpa eum deserunt?
              </p>
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
