import React from "react";
import AboutModal from "./AboutModal";
import "./reset.css";
import "./App.css";
import ThemeModal from "./ThemeModal";
import Fullscreen from "react-full-screen";

class App extends React.Component {
  state = {
    themes: [
      { color: "blue", clicked: false },
      { color: "green", clicked: false },
      { color: "yellow", clicked: true },
      { color: "mistyrose", clicked: false }
    ],
    isFull: false,
    bgColor: "blue"
  };

  goFull = () => {
    this.setState({ isFull: true });
  };

  handleClick = index => {
    console.log(index);
    var themes = this.state.themes.map((theme, i) => {
      if (index === i) {
        return { ...theme, clicked: true };
      } else {
        return { ...theme, clicked: false };
      }
    });

    this.setState({ themes });
  };

  handleButton = () => {
    console.log("hey");
    var array = this.state.themes.filter(theme => theme.clicked === true);
    var color = array[0].color;

    this.setState({
      bgColor: color
    });
  };

  render() {
    return (
      <div className="App" style={{ backgroundColor: `${this.state.bgColor}` }}>
        <div className="header">
          <div className="left-area">
            <AboutModal />
            <ThemeModal
              highlight={this.handleClick}
              themes={this.state.themes}
              changeBackground={this.handleButton}
            />
          </div>
          <div className="right-area">
            <button onClick={this.goFull}>Fullscreen</button>
            <Fullscreen
              enabled={this.state.isFull}
              onChange={isFull => this.setState({ isFull })}
            >
              <div className="full-screenable-node"></div>
            </Fullscreen>
            <p className="timer">11:38</p>
          </div>
        </div>
        <div className="m-icon">
          <img src="music-player-icon.png" alt="" />
          <p>Cliff tunes</p>
        </div>
      </div>
    );
  }
}

export default App;
