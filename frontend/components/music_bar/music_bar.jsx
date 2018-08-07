import React from 'react';
import Audio from 'react-audioplayer';
import ReactAudioPlayer from 'react-audio-player';
{/*

  <Audio
  width={600}
  height={400}
  autoPlay={true}
  playlist={nowPlayingQueue}
  />

  */}


class MusicBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSong: this.props.nowPlayingQueue[0] ? this.props.nowPlayingQueue[0].src : "bensound-slowmotion.mp3",
      currentSongIdx: 0
    };

    this.changeSong = this.changeSong.bind(this);
    this.nextSong = this.nextSong.bind(this);
  }

  changeSong(newSong) {
    this.setState({currentSong: newSong})
  }

  componentWillMount() {
    // console.log("testingWILLMOUNT");
  }

  componentDidMount() {
    // console.log("testingDIDMOUNT");
  }


  nextSong (event) {
    event.preventDefault();
    const { nowPlayingQueue } = this.props;
    this.setState({currentSong: this.props.nowPlayingQueue[(this.state.currentSongIdx + 1) % nowPlayingQueue.length].src, currentSongIdx: this.state.currentSongIdx + 1});
  }


  render() {
    const { nowPlayingQueue } = this.props;
    if (!(nowPlayingQueue == undefined) && (nowPlayingQueue.length > 0)) {
      const randomIndex = Math.floor(Math.random() * Math.floor(nowPlayingQueue.length))
      // const nowPlayingSong = nowPlayingQueue[randomIndex];
      const nowPlayingSong = this.state.currentSong;
      // console.log("Test 2 (playlist)");
      // console.log(nowPlayingQueue);
      // console.log(nowPlayingSong);
      // console.log(randomIndex);
      console.log(this.state.currentSong);
      console.log(this.state.currentSongIdx);


      return (
        <div className="music-bar-container">
          <footer className="music-bar-footer">
            <h1>Music Bar</h1>

            <audio
              ref="player"
              src={this.state.currentSong}
              autoPlay
            />
            <div>
              <button onClick={() => this.refs.player.play()}>Play</button>
              <button onClick={() => this.refs.player.pause()}>Pause</button>
              <button onClick={this.nextSong}>Next Song</button>
            </div>

          </footer>
        </div>
      );
    } else {
      console.log("Test 1");
      return (
        <div className="music-bar-container">
          <footer className="music-bar-footer">
            <h1>Music Bar</h1>

            <audio
              ref="player"
              src={this.state.currentSong}
            />
            <div>
              <button onClick={() => this.refs.player.play()}>Play</button>
              <button onClick={() => this.refs.player.pause()}>Pause</button>
              <button onClick={this.nextSong}>Next Song</button>
            </div>

          </footer>
        </div>
      );
    }
  }
}

export default MusicBar;
