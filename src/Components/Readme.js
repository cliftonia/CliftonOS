import React from "react";
import "../css/Readme.css";
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
                <h3>Readme</h3>
              </div>
              <div className="modal-body">
                <h1>App Features</h1>
                <ul>
                  <li>- Rezizable, Draggable Modals</li>
                  <li>- Theme Changer</li>
                  <li>- Digital Clock</li>
                  <li>- Fullscreen mode</li>
                  <li>- Music and Video Player</li>
                  <li>
                    - Paint application that allows you to paint over movie
                    posters
                  </li>
                </ul>
                <h1>Styling</h1>
                <ul>
                  <li>
                    - Flickering display to recreate the feel of working on an
                    CRT monitor
                  </li>
                  <li>- the ability to change the background image</li>
                  <li>- Styled like you are using a computer from the 90's</li>
                </ul>
                <h1>Technologies</h1>
                <ul>
                  <li>- React</li>
                  <li>- HTML</li>
                  <li>- CSS</li>
                  <li>- JavaScript</li>
                  <li>- API (OMDB)</li>
                </ul>
                <h1>Approach</h1>
                <p>
                  I wanted to create an interesting portfolio page that could
                  show all the projects that I have worked on. I decided to go
                  for a look and feel of a 90's operating system, I did this by
                  using old style fonts and icons.
                </p>
                <h1>Challenges and lessons learnt</h1>
                <p>
                  As this was my first React application my challanges was
                  working with state and understanding how it works, especially
                  when my previous application was about working with the dom.
                  My other challanges faced when working with external custom
                  components was styling them with CSS.
                </p>
                <h1>Still to do...</h1>
                <ul>
                  <li>- create a double click feature for the icons</li>
                  <li>- make it mobile responsive</li>
                </ul>
              </div>
            </div>
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default Socials;
