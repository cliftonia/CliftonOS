import React from "react";
import "./App.css";
import ReactModal from "react-modal-resizable-draggable";
import axios from "axios";

class CrudApps extends React.Component {
  state = {
    aboutIsOpen: false,
    themeIsOpen: false,
    movies: [],
    searchTerm: "",
    moviePoster: "",
    isFetching: false,
    selectedColor: "",
    pixelColors: Array(700).fill("")
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  paintPixel = event => {
    const { selectedColor, pixelColors } = this.state;
    if (event.target.classList.contains("pixel")) {
      pixelColors[event.target.id] = selectedColor;
      this.setState({ pixelColors });
    }
  };

  createCanvas = () => {
    return (
      <section
        className="canvas"
        style={{
          background: `url(${this.state.moviePoster})`,
          backgroundSize: "cover"
        }}
      >
        {this.state.pixelColors.map((color, index) => (
          <div
            // style={{ backgroundImage: `url(${this.state.moviePoster})` }}
            key={index}
            id={index}
            onMouseOver={this.paintPixel}
            style={{
              backgroundColor: color
            }}
            className="pixel"
          ></div>
        ))}
      </section>
    );
  };

  handleColor = event => {
    event.preventDefault();

    console.log("hi");
  };

  handleBackground = event => {
    event.preventDefault();
    const { searchTerm } = this.state; //destructuring get better at it
    const url = `http://www.omdbapi.com/?t=${searchTerm}&apikey=2f6435d9`;
    axios.get(url).then(res => {
      console.log(res.data.Poster);

      this.setState({
        moviePoster: res.data.Poster,
        isFetching: false
      });
    });
    this.setState({ isFetching: true });
  };

  handleColorInput = event => {
    this.setState({
      selectedColor: event.target.value
    });
  };

  handleSearchInput = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    return (
      <div>
        <div className="g-wrapper">
          <div className="p-icon" onClick={this.openModal}>
            <img src="/images/paint.png" alt="" />
            <p style={this.props.handleFontColor()}>Cliff Paint</p>
          </div>
          <ReactModal
            initWidth={671}
            initHeight={700}
            disableResize
            onRequestClose={this.closeModal}
            isOpen={this.state.modalIsOpen}
          >
            <div className="modal-wrapper">
              <div className="a-header">
                <button onClick={this.closeModal}>X</button>
                <h3>Cliff Paint</h3>
              </div>
              <div className="modal-body">
                <section>
                  <div className="brush-box">
                    <form className="color-form" action="">
                      <input onChange={this.handleColorInput} type="text" />
                      <button onClick={this.handleColor} className="color-btn">
                        type a color
                      </button>
                    </form>

                    <form className="movie-form" action="">
                      <input
                        onChange={this.handleSearchInput}
                        className="move-title-input"
                        type="text"
                      />
                      <button onClick={this.handleBackground}>
                        set background
                      </button>
                    </form>
                  </div>
                </section>
                {this.createCanvas()}
              </div>
            </div>
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default CrudApps;
