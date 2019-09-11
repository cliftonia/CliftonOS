import React from "react";
import "./Socials.css";
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
            <img src="foldericon.jpg" alt="" />
            <p style={this.props.handleFontColor()}>Socials</p>
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
                <div className="s-icons">
                  <a
                    href="https://github.com/cliftonia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="github.jpg" alt="" />
                    <p>Github</p>
                  </a>
                </div>
                <div className="s-icons">
                  <a
                    href="https://www.linkedin.com/in/cliftonbaggerman/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="linkedin.jpg" alt="" />
                    <p>LinkedIn</p>
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

export default Socials;
