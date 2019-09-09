import React from "react";
import "./Topbar.css";
import AboutModal from "./AboutModal";
import ThemeModal from "./ThemeModal";

class Topbar extends React.Component {
  state = {};

  render() {
    return (
      <section>
        <div className="top-bar">
          <div className="left-area">
            <AboutModal />
            <ThemeModal />
            <button>Sign In/Up</button>
          </div>
          <div className="right-area">
            <button>Fullscreen</button>
            <p>11:38</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Topbar;
