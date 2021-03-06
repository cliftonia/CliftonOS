import React from "react";
import "../css/CrudApps.css";
import ReactModal from "react-modal-resizable-draggable";

class CrudApps extends React.Component {
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
            <p style={this.props.handleFontColor()}>Crud Apps</p>
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
                <h3>Crud Apps</h3>
              </div>
              <div className="modal-body">
                <div className="c-icons">
                  <a
                    href="https://produce-ex.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="c-img"
                      src="/images/strawberry.png"
                      alt=""
                    />
                    <p>Produce Exchange</p>
                  </a>
                </div>
                <div className="c-icons">
                  <a
                    href="https://whatsthat-webapp.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="c-img" src="/images/whatsthat.png" alt="" />
                    <p>Whats That</p>
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

export default CrudApps;
