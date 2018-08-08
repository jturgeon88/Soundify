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
      currentSong: "bensound-slowmotion.mp3",
      currentSongIdx: 0,
      shuffle: false
    };

    this.changeSong = this.changeSong.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);
  }

  changeSong(newSong) {
    this.setState({currentSong: newSong})
  }

  componentWillMount() {
    // console.log("testingWILLMOUNT");
  }

  componentDidMount() {
    // this.setState({currentSong: this.props.nowPlayingQueue[0] ? this.props.nowPlayingQueue[0].src : "bensound-slowmotion.mp3"})
  }

  prevSong (event) {
    event.preventDefault();
    const { nowPlayingQueue } = this.props;
    const currentSongIdx = this.state.currentSongIdx - 1;
    this.setState({currentSongIdx: currentSongIdx < 0 ? (currentSongIdx + nowPlayingQueue.length) : currentSongIdx});
  }

  nextSong (event) {
    event.preventDefault();
    const { nowPlayingQueue } = this.props;
    const randomIndex = Math.floor(Math.random() * Math.floor(nowPlayingQueue.length));
    this.setState({currentSongIdx: this.state.shuffle ? randomIndex : ((this.state.currentSongIdx + 1) % nowPlayingQueue.length)});
  }

  toggleShuffle (event) {
    event.preventDefault();
    this.setState({shuffle: !this.state.shuffle});
  }


  render() {
    const { nowPlayingQueue } = this.props;
    if (!(nowPlayingQueue == undefined) && (nowPlayingQueue.length > 0)) {
      let nowPlayingSong;
      if (this.state.shuffle) {
        const randomIndex = Math.floor(Math.random() * Math.floor(nowPlayingQueue.length));
        nowPlayingSong = nowPlayingQueue[randomIndex];
        console.log("Shuffling");
        console.log(nowPlayingSong);
        console.log(randomIndex);

      } else {
        nowPlayingSong = nowPlayingQueue[this.state.currentSongIdx];
        console.log("Not Shuffling");
        console.log(nowPlayingSong);
        console.log(this.state.currentSongIdx);

      }

      return (
        <div className="music-bar-container">
          <footer className="music-bar-footer">
            <h1>Music Bar</h1>

            <audio
              ref="player"
              src={nowPlayingSong.src}
              autoPlay
            />
            <div>
              <button onClick={this.prevSong}>Prev Song</button>
              <button onClick={() => this.refs.player.play()}>Play</button>
              <button onClick={() => this.refs.player.pause()}>Pause</button>
              <button onClick={this.nextSong}>Next Song</button>
              <button onClick={this.toggleShuffle}>Shuffle</button>
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
            </div>

          </footer>
        </div>
      );
    }
  }
}

export default MusicBar;
