import React from "react";
import "../css/ApiApps.css";
import ReactModal from "react-modal-resizable-draggable";

class ApiApps extends React.Component {
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
            <img src="/images/CrudApps.png" alt="" />
            <p style={this.props.handleFontColor()}>API Apps</p>
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
                <h3>API Apps</h3>
              </div>
              <div className="modal-body">
                <div className="c-icons">
                  <a
                    href="https://cliftonia.github.io/GIPHY/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="c-img" src="/images/giph.jpg" alt="" />
                    <p>GIPHY</p>
                  </a>
                </div>
                <div className="c-icons">
                  <a
                    href="https://cliftonia.github.io/Chuck-Norris/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="c-img"
                      src="/images/Chuck-Norris.jpg"
                      alt=""
                    />
                    <p>Chuck Norris</p>
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

export default ApiApps;
