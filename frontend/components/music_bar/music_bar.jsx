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

  componentWillMount() {
    console.log("testingWILLMOUNT");
  }

  componentDidMount() {
    console.log("testingDIDMOUNT");
    this.props.fetchNextPlaylist(2);  // TODO This needs to change. Can't have this hard coded id
  }


  handleClick (event) {
    event.preventDefault();

  }


  render() {
    const { nowPlayingQueue } = this.props;
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
              controls={false}
              autoPlay
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
