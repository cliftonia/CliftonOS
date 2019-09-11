import React from "react";
import AboutModal from "./AboutModal";
import "./reset.css";
import "./Normalize.css";
import "./App.css";
import ThemeModal from "./ThemeModal";
import Fullscreen from "react-full-screen";
import Games from "./Games";
import MusicPlayer from "./MusicPlayer";
import Socials from "./Socials";
import Clock from "./Clock";
import CrudApps from "./CrudApps";
import Readme from "./Readme";
import Email from "./Email";

class App extends React.Component {
  state = {
    themes: [
      { Url: "Honeycomb.png", clicked: false, name: "Honeycomb" },
      { Url: "PurpleParadise.png", clicked: false, name: "Purple Paradise" },
      { Url: "redbrick.png", clicked: true, name: "Red Brick" },
      { Url: "Goldheavon.png", clicked: false, name: "Gold Dream" }
    ],
    isFull: false,
    bgColor: "green",
    bgUrl: "redbrick.png"
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

  handleFontColor = () => {
    if (this.state.bgUrl === "Honeycomb.png") {
      return { color: "black" };
    } else {
      return { color: "white" };
    }
  };

  handleButton = () => {
    console.log("hey");
    var array = this.state.themes.filter(theme => theme.clicked === true);
    var Url = array[0].Url;

    this.setState({
      bgUrl: Url
    });
  };

  render() {
    return (
      <Fullscreen
        enabled={this.state.isFull}
        onChange={isFull => this.setState({ isFull })}
      >
        <div
          className="App"
          style={{ backgroundImage: `url(${this.state.bgUrl})` }}
        >
          <div className="header">
            <div className="left-area">
              <AboutModal />
              <ThemeModal
                highlight={this.handleClick}
                themes={this.state.themes}
                changeBackground={this.handleButton}
              />
            </div>
            <div className="middle-area">
              <h1>Clifton OS</h1>
            </div>
            <div className="right-area">
              <button className="fscreen-btn" onClick={this.goFull}>
                Fullscreen
              </button>

              <Clock />
            </div>
          </div>
          <Games
            handleFontColor={this.handleFontColor}
            themes={this.state.themes}
          />
          <Socials
            handleFontColor={this.handleFontColor}
            themes={this.state.themes}
          />
          <MusicPlayer
            handleFontColor={this.handleFontColor}
            themes={this.state.themes}
          />
          <CrudApps
            handleFontColor={this.handleFontColor}
            themes={this.state.themes}
          />
          <Readme
            handleFontColor={this.handleFontColor}
            themes={this.state.themes}
          />
          <Email
            handleFontColor={this.handleFontColor}
            themes={this.state.themes}
          />
        </div>
      </Fullscreen>
    );
  }
}

export default App;
