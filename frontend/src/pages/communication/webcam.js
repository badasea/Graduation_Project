import React from "react";
import VideoCall from "../../components/video/access/simple-peer";
import "../../styles/video.css";
import io from "socket.io-client";
import { getDisplayStream } from "../../components/video/access/media-access";

import MicOnIcon from "@mui/icons-material/KeyboardVoice";
import MicOffIcon from "@mui/icons-material/MicOff";
import CamOnIcon from "@mui/icons-material/Videocam";
import CamOffIcon from "@mui/icons-material/VideocamOff";

import Grid from "@mui/material/Grid";
import Chat from "./chat";

const place = window.location.href;
var arr = place.split("/");

class Video extends React.Component {
  constructor() {
    super();
    this.state = {
      localStream: {},
      remoteStreamUrl: "",
      streamUrl: "",
      initiator: false,
      peer: {},
      full: false,
      connecting: false,
      waiting: true,
      micState: true,
      camState: true,
    };
  }
  videoCall = new VideoCall();

  componentDidMount() {
    const socket = io(process.env.REACT_APP_SIGNALING_SERVER);
    const component = this;
    this.setState({ socket });
    const { roomId } = arr[4];
    this.getUserMedia().then(() => {
      socket.emit("join", { roomId: arr[4] });
    });

    socket.on("init", () => {
      component.setState({ initiator: true });
    });
    socket.on("ready", () => {
      component.enter(arr[4]);
    });
    socket.on("desc", (data) => {
      if (data.type === "offer" && component.state.initiator) return;
      if (data.type === "answer" && !component.state.initiator) return;
      component.call(data);
    });
    socket.on("disconnected", () => {
      component.setState({ initiator: true });
    });
    socket.on("full", () => {
      component.setState({ full: true });
    });
  }

  getUserMedia(cb) {
    return new Promise((resolve, reject) => {
      navigator.getUserMedia = navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
      const op = {
        video: {
          width: { min: 160, ideal: 640, max: 1280 },
          height: { min: 120, ideal: 360, max: 720 },
        },
        audio: true,
      };
      navigator.getUserMedia(
        op,
        (stream) => {
          this.setState({ streamUrl: stream, localStream: stream });
          this.localVideo.srcObject = stream;
          resolve();
        },
        () => {}
      );
    });
  }

  setAudioLocal() {
    if (this.state.localStream.getAudioTracks().length > 0) {
      this.state.localStream.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
    }
    this.setState({
      micState: !this.state.micState,
    });
  }

  setVideoLocal() {
    if (this.state.localStream.getVideoTracks().length > 0) {
      this.state.localStream.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
    }
    this.setState({
      camState: !this.state.camState,
    });
  }

  getDisplay() {
    getDisplayStream().then((stream) => {
      stream.oninactive = () => {
        this.state.peer.removeStream(this.state.localStream);
        this.getUserMedia().then(() => {
          this.state.peer.addStream(this.state.localStream);
        });
      };
      this.setState({ streamUrl: stream, localStream: stream });
      this.localVideo.srcObject = stream;
      this.state.peer.addStream(stream);
    });
  }

  enter = (roomId) => {
    this.setState({ connecting: true });
    const peer = this.videoCall.init(
      this.state.localStream,
      this.state.initiator
    );
    this.setState({ peer });

    peer.on("signal", (data) => {
      const signal = {
        room: roomId,
        desc: data,
      };
      this.state.socket.emit("signal", signal);
    });
    peer.on("stream", (stream) => {
      this.remoteVideo.srcObject = stream;
      this.setState({ connecting: false, waiting: false });
    });
    peer.on("error", function (err) {
      // console.log(err);
    });
  };

  call = (otherId) => {
    this.videoCall.connect(otherId);
  };
  renderFull = () => {
    if (this.state.full) {
      return "The room is full";
    }
  };
  render() {
    return (
      <Grid container>
        <Grid item xs={9}>
          <div className="video-wrapper">
            <div className="local-video-wrapper">
              <video
                autoPlay
                id="localVideo"
                muted
                ref={(video) => (this.localVideo = video)}
              />
            </div>
            <video
              autoPlay
              className={`${
                this.state.connecting || this.state.waiting ? "hide" : ""
              }`}
              id="remoteVideo"
              ref={(video) => (this.remoteVideo = video)}
            />

            <div className="controls">
              <button
                className="control-btn"
                onClick={() => {
                  this.setAudioLocal();
                }}
              >
                {this.state.micState ? (
                  <MicOnIcon color="secondary" fontSize="large" />
                ) : (
                  <MicOffIcon color="secondary" fontSize="large" />
                )}
              </button>

              <button
                className="control-btn"
                onClick={() => {
                  this.setVideoLocal();
                }}
              >
                {this.state.camState ? (
                  <CamOnIcon color="secondary" fontSize="large" />
                ) : (
                  <CamOffIcon color="secondary" fontSize="large" />
                )}
              </button>
            </div>

            {this.state.connecting && (
              <div className="status">
                <p>사장님과 소통을 시작합니다.</p>
              </div>
            )}
            {this.state.waiting && (
              <div className="status">
                <p>
                  다른 이용자와 거래 중이거나 혹은 사장님께서 준비중으로 잠시만
                  기다려주세요.
                </p>
              </div>
            )}
            {this.renderFull()}
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="video-wrapper">
            <Chat />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Video;
