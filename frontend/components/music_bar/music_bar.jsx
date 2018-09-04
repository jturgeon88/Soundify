import React from 'react';
import Audio from 'react-audioplayer';

class MusicBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSong: "bensound-slowmotion.mp3",
      shuffle: false,
      currentSongIdx: 0
    };

    this.changeSong = this.changeSong.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);
    this.togglePlayButton = this.togglePlayButton.bind(this);
  }

  changeSong(newSong) {
    this.setState({currentSong: newSong})
  }

  togglePlayButton () {
    const { isPlaying, togglePlaying } = this.props;
    if (isPlaying) {
      this.refs.player.pause()
    } else {
      this.refs.player.play()
    }
    togglePlaying();
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
    this.setState({shuffle: !this.state.shuffle, currentSongIdx: Math.floor(Math.random() * Math.floor(this.props.nowPlayingQueue.length))});
  }

  render() {
    const { nowPlayingQueue } = this.props;
    let nowPlayingSong;
    if (!(nowPlayingQueue == undefined) && (nowPlayingQueue.length > 0)) {
      nowPlayingSong = nowPlayingQueue[this.state.currentSongIdx].src;
    } else {
      nowPlayingSong = this.state.currentSong;
    }

    return (
      <div className="music-bar-container">
        <footer className="music-bar-footer">
          <audio
            ref="player"
            src={nowPlayingSong}
            autoPlay={this.props.isPlaying ? true : false }
          />
          <div className='music-bar-buttons'>
              <button className='music-bar-button music-bar-button-sm' onClick={this.prevSong}><i className="fas fa-step-backward"></i></button>
              <button className='music-bar-button' onClick={this.togglePlayButton}>{ this.props.isPlaying ? <i className="far fa-pause-circle"></i> : <i className="far fa-play-circle"></i>}</button>
              <button className='music-bar-button music-bar-button-sm' onClick={this.nextSong}><i className="fas fa-step-forward"></i></button>
              <button className={'music-bar-button music-bar-button-sm ' + (this.state.shuffle ? 'shuffling' : '')} onClick={this.toggleShuffle}><i className="fas fa-random"></i></button>
          </div>
        </footer>
      </div>
    );
  }
}

export default MusicBar;
