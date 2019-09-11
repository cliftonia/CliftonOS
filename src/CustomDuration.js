import React, { Component } from "react";
import { withMediaProps } from "react-media-player";

class CustomDuration extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }

  render() {
    const { className, style, media } = this.props;
    return (
      <div>
        <h3>time</h3>
      </div>
    );
  }
}

export default withMediaProps(CustomDuration);
