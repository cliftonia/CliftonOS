import React, { Component } from "react";
import "../css/MediaPlayer.css";
import { Media, Player, controls } from "react-media-player";
const { PlayPause, CurrentTime, Duration, Volume, autoPlay } = controls;

class MediaPlayer extends Component {
  render() {
    return (
      <div>
        <Media>
          <div className="media">
            <div className="media-player">
              <Player src="/Mp3/Cliftonia-whodis.mp3" />
            </div>
            <div className="media-controls">
              <PlayPause />
              <CurrentTime />:
              <Duration />
              <p>
                Volume: <Volume />
              </p>
              <autoPlay />
            </div>
          </div>
        </Media>
      </div>
    );
  }
}

export default MediaPlayer;
