import React from 'react';
import Audio from 'react-audioplayer';
import ReactAudioPlayer from 'react-audio-player';


const MusicBar = (props) => {

  return (
    <div className="music-bar-container">
      <footer className="music-bar-footer">
        <h1>Music Bar</h1>
          <ReactAudioPlayer
            src="bensound-ukulele.mp3"
            controls
          />
        {/*}<Audio
            width={600}
            height={400}
            autoPlay={true}
            playlist={somePlaylist}
          />*/}
      </footer>
    </div>
  );
}

export default MusicBar;
