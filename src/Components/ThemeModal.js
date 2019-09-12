import React from "react";
import "../css/Topbar.css";
import ReactModal from "react-modal-resizable-draggable";

class ThemeModal extends React.Component {
  state = {
    aboutIsOpen: false,
    themeIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Themes</button>
        <ReactModal
          initWidth={400}
          initHeight={400}
          disableResize
          onRequestClose={this.closeModal}
          isOpen={this.state.modalIsOpen}
        >
          <div className="t-header">
            <button onClick={this.closeModal}>X</button>
            <h3>Themes</h3>
          </div>
          <div className="t-body">
            <img
              className="theme-image"
              src="/images/201B40_00H-IMS-en_SG.jpg"
              alt=""
            />
            <p>choose desktop theme</p>
          </div>
          <div className="t-i-b-w">
            <div className="t-inner-body">
              {this.props.themes.map((theme, index) => (
                <p
                  key={index}
                  onClick={() => this.props.highlight(index)}
                  className={theme.clicked ? `unselected-selected` : ``}
                >
                  {theme.name}
                </p>
              ))}
            </div>
          </div>
          <div className="t-btn">
            <button onClick={this.props.changeBackground}>Apply</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default ThemeModal;
