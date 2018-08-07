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
      currentSong: "bensound-slowmotion.mp3"
    };

    this.changeSong = this.changeSong.bind(this);
  }

  changeSong(newSong) {
    this.setState({currentSong: newSong})
  }

  componentWillMount() {
    console.log("testingWILLMOUNT");
  }

  componentDidMount() {
    console.log("testingDIDMOUNT");
    const firstIndex = this.props.playlistIndices[0];
    console.log(firstIndex);
    // this.props.fetchNextPlaylist(firstIndex);  // TODO This needs to change. Can't have this hard coded id
  }


  handleClick (event) {
    event.preventDefault();

  }


  render() {
    const { nowPlayingQueue } = this.props;
    console.log(this.props.playlistIndices);
    if (!(nowPlayingQueue == undefined) && (nowPlayingQueue.length > 0)) {
      const randomIndex = Math.floor(Math.random() * Math.floor(nowPlayingQueue.length))
      const nowPlayingSong = nowPlayingQueue[randomIndex];
      console.log("Test 2 (playlist)");
      console.log(nowPlayingQueue);
      console.log(nowPlayingSong);
      console.log(randomIndex);


      return (
        <div className="music-bar-container">
          <footer className="music-bar-footer">
            <h1>Music Bar</h1>

            <audio
              ref="player"
              src={nowPlayingSong.src}
 
              controls
            />
            <div>
              <button onClick={() => this.refs.player.play()}>Play</button>
              <button onClick={() => this.refs.player.pause()}>Pause</button>
            </div>

          </footer>
        </div>
      );
    } else {
      console.log("Test 1");
      return (
        <div className="music-bar-container">
          <footer className="music-bar-footer">
            <h1>That didn't work!</h1>

          </footer>
        </div>
      );
    }
  }
}

export default MusicBar;
