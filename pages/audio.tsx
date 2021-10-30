// https://github.com/lhz516/react-h5-audio-player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Player = () => (
  <AudioPlayer
    autoPlay
    src="/Lamy/雪花ラミィです。.mp3"
    onPlay={e => console.log("onPlay")}
  // other props here
  />
);

export default Player