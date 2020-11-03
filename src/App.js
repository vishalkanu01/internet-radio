import "./App.css";
import React, { Component } from "react";
import step1 from "./img/1.png";
import step2 from "./img/2.png";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      radio: [
{
          name: "Hits FM",
          url: "https://usa15.fastcast4u.com/proxy/hitsfm912?mp=/1",
          add: "KTM",
        },
        {
          name: "Radio Kantipur",
          url: "http://broadcast.radiokantipur.com:7248/stream/;",
          add: "KTM",
        },
        {
          name: "Kalika",
          url: "http://kalika-stream.softnep.com:7740/;",
          add: "PKR",
        },
        
        {
          name: "Radio Nepal",
          url: "http://radionepal.gov.np:40100/stream",
          add: "KTM",
        },

        {
          name: "Annapurna",
          url: "http://live.itechnepal.com:8964/stream",
          add: "PKR",
        },
        {
          name: "Radio Amargadhi",
          url: "http://live.itechnepal.com:8922/stream",
          add: "Unknown",
        },
        {
          name: "Radio Bandipur",
          url: "http://live.itechnepal.com:8368/stream?type=.mp3",
          add: "Bandipur",
        },
        {
          name: "Radio Audio",
          url: "https://stream.zeno.fm/fvrx47wpg0quv",
          add: "KTM",
        },
        {
          name: "Radio Chautari",
          url: "http://live.itechnepal.com:9383/stream",
          add: "Unknown",
        },
        {
          name: "Radio Resunga",
          url: "http://live.itechnepal.com:9066/stream",
          add: "Gulmi",
        },
        {
          name: "BFBS Gurkha Radio",
          url: "https://listen-ssvcbfbs.sharp-stream.com/ssvcbfbs3.aac",
          add: "KTM",
        },
        {
          name: "Swadesh FM",
          url: "http://216.55.141.189:8653/;stream/1",
          add: "Chitwan",
        },
        {
          name: "Butwal FM",
          url: "http://streaming.softnep.net:8003/;",
          add: "Butwal",
        },
        {
          name: "Image FM",
          url: "http://streaming.hamropatro.com:8631/;stream.mp3",
          add: "KTM",
        },

        {
          name: "Bhojpuriya",
          url:
            "http://streaming.softnep.net:8143/;stream.nsv&amp;type=mp3&amp;volume=70",
          add: "BRJ",
        },
        {
          name: "Headlines & Music FM",
          url: "http://streaming.hamropatro.com:8246/;?",
          add: "Dhanusa",
        },
        {
          name: "Radio Bhorukawa",
          url: "http://live.itechnepal.com:8374/stream?type=.mp3",
          add: "Rajbiraj",
        },
      ],
      index: 0,
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  next = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };
  prev = () => {
    if (this.state.index !== 0)
      this.setState({
        index: this.state.index - 1,
      });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="glow">
            <div className="text-container">
              <span className="text">
                {this.state.radio[this.state.index].name}
              </span>
              <br />
              <span className="text">
                {this.state.radio[this.state.index].add}
              </span>
              <br />
              <div className="playback_controls">
                <button onClick={this.prev}>
                  <i className="fa fa-fast-backward"></i>
                </button>

                <button onClick={this.next}>
                  <i className="fa fa-fast-forward"></i>
                </button>
              </div>
              <br />
              <div id="seekbar">
                <audio
                  controls
                  autoplay
                  src={this.state.radio[this.state.index].url}
                ></audio>
              </div>
              <br />

              <br />
              <span className="text">
                {this.state.date.toLocaleTimeString()}
              </span>
              <br />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <span className="text" id="forpc">
            Some of the browser may not support playing audio, please follow the
            below steps to solve that issue. Sorry for the inconvenience. For
            more details:
            <span className="text" style={{ paddingTop: "10px" }}>
              <a
                style={{ color: "white" }}
                target="blank"
                href="https://docs.adobe.com/content/help/en/target/using/experiences/vec/troubleshoot-composer/mixed-content.html"
              >
                docs.adobe.com/content/help/en/target/using/experiences/vec/troubleshoot-composer/mixed-content.html
              </a>
            </span>
          </span>
          <span className="text" id="formobile">
            If there is no audio even after clicking play button then this
            browser doesn't support some feature of this website. Switch to
            another browser or play from PC. Sorry for the inconvenience. For
            more details:
            <span className="text" style={{ paddingTop: "10px" }}>
              <a
                style={{ color: "white" }}
                target="blank"
                href="https://docs.adobe.com/content/help/en/target/using/experiences/vec/troubleshoot-composer/mixed-content.html"
              >
                click here{" "}
              </a>
            </span>
          </span>

          <img className="box" src={step1} alt="step1"></img>
          <img className="box" src={step2} alt="step2"></img>
        </div>

        <footer className="footer">
          <div style={{ color: "white", textAlign: "center" }}>
            <a
              target="blank"
              style={{ color: "white" }}
              href="https://vishalkanu01.github.io/"
            >
              {" "}
              Know more about me.
            </a>{" "}
          </div>
        </footer>
      </div>
    );
  }
}
