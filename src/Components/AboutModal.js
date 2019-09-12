import React from "react";
import "../css/Topbar.css";
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
    const { modalIsOpen } = this.state;
    return (
      <div>
        <button onClick={this.openModal}>About</button>
        <ReactModal
          initWidth={700}
          initHeight={700}
          disableResize
          onRequestClose={this.closeModal}
          isOpen={modalIsOpen}
        >
          <div className="modal-wrapper">
            <div className="a-header">
              <button onClick={this.closeModal}>X</button>
              <h3>About</h3>
            </div>
            <img className="about-img" src="/images/clifton.gif" alt="" />
            <div className="modal-body">
              <h1>Clifton OS</h1>
              <p>
                I am software engineer who is passionate about the tech space,
                who enjoys solving problems. I believe what sets me apart is my
                thirst for self-development as well the ability to work well
                under pressure. I show honesty and transparency when it comes to
                finding the right solutions. My experience in recruitment
                specifically in the tech space shows a level of understanding of
                what companies look for. I am a resilient and dependable
                individual with an entrepreneurial spirit, who thinks outside
                the box to enrich service experience.
              </p>
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
