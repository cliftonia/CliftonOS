import React from "react";
import AboutModal from "./Components/AboutModal";
import "./css/reset.css";
import "./css/Normalize.css";
import "./App.css";
import ThemeModal from "./Components/ThemeModal";
import Fullscreen from "react-full-screen";
import Games from "./Components/Games";
import MusicPlayer from "./Components/MusicPlayer";
import Socials from "./Components/Socials";
import Clock from "./Components/Clock";
import CrudApps from "./Components/CrudApps";
import Readme from "./Components/Readme";
import Email from "./Components/Email";
import PixelArt from "./Components/PixelArt";

class App extends React.Component {
  state = {
    themes: [
      { Url: "/images/Honeycomb.png", clicked: false, name: "Honeycomb" },
      {
        Url: "/images/PurpleParadise.png",
        clicked: false,
        name: "Purple Paradise"
      },
      { Url: "/images/redbrick.png", clicked: true, name: "Red Brick" },
      { Url: "/images/Goldheavon.png", clicked: false, name: "Gold Dream" },
      { Url: "/images/clifton.gif", clicked: false, name: "Clifton OS" }
    ],
    isFull: false,
    bgColor: "green",
    bgUrl: "/images/redbrick.png"
  };

  goFull = () => {
    this.setState({ isFull: true });
  };

  handleClick = index => {
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
    const { bgUrl } = this.state;
    if (bgUrl === "/images/Honeycomb.png" || bgUrl === "/images/clifton.gif") {
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

  backgroundSize = () => {
    if (this.state.bgUrl === "/images/clifton.gif") {
      return "cover";
    } else {
      return "";
    }
  };

  render() {
    return (
      <Fullscreen
        enabled={this.state.isFull}
        onChange={isFull => this.setState({ isFull })}
      >
        <div
          className="App"
          style={{
            backgroundImage: `url(${this.state.bgUrl})`,
            backgroundSize: `${this.backgroundSize()}`
          }}
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
          <div className="app-main-ara">
            <div className="first-row">
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
            <div className="second-row">
              <PixelArt
                handleFontColor={this.handleFontColor}
                themes={this.state.themes}
              />
            </div>
          </div>
        </div>
      </Fullscreen>
    );
  }
}

export default App;
