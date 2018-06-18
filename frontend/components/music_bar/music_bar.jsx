import React from 'react';
import Audio from 'react-audioplayer';
import ReactAudioPlayer from 'react-audio-player';
{/*

  <Audio
  width={600}
  height={400}
  autoPlay={true}
  playlist={currentPlaylist}
  />

  */}


class MusicBar extends React.Component {

  componentWillMount() {
    console.log("testingWILLMOUNT");
  }

  componentDidMount() {
    console.log("testingDIDMOUNT");
    this.props.fetchCurrentPlaylist(1);
  }

  // handleClick (event) {
  //   event.preventDefault();
  //   this.setState({ currentSong: "bensound-funnysong.mp3" });
  // }


  render() {
    const { currentPlaylist } = this.props;
    if (!(currentPlaylist == undefined) && (Object.keys(currentPlaylist).length > 0)) {
      const currentSongs = currentPlaylist[1].songs;
      const randomIndex = Math.floor(Math.random() * Math.floor(currentSongs.length))
      const currentSong = currentSongs[randomIndex];
      console.log("Test 2 (playlist)");
      console.log(currentPlaylist);
      console.log(currentSongs);
      console.log(currentSong);
      console.log(randomIndex);


      return (
        <div className="music-bar-container">
          <footer className="music-bar-footer">
            <h1>Music Bar</h1>
            <ReactAudioPlayer
              src={currentSong.src}
              controls
              />

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
