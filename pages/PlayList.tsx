// https://github.com/lhz516/react-h5-audio-player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Styles from '../public/css/style.module.css'
import React, { Component } from 'react'


const playlist = [
  { name: '枝芽', src: '/Lamy/ホロライブ5期生.mp3' },
  { name: '自由女神', src: '/Lamy/顔が肝臓.mp3' },
  { name: '无雨无晴', src: "/Lamy/雪花ラミィです。.mp3" },
  { name: '碎片', src: '/Lamy/こんらみです。(早い).mp3' },
]

interface PlayListState {
  currentMusicIndex: number
}

class PlayList extends Component<null, PlayListState> {
  state = {
    currentMusicIndex: 0,
  }

  handleClickPrevious = (): void => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex === 0 ? playlist.length - 1 : prevState.currentMusicIndex - 1,
    }))
  }

  handleClickNext = (): void => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex < playlist.length - 1 ? prevState.currentMusicIndex + 1 : 0,
    }))
  }
  AutoNextList = (): void => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex < playlist.length - 1 ? prevState.currentMusicIndex + 1 : 0,
    }))
  }

  render(): React.ReactNode {
    const { currentMusicIndex } = this.state
    return (
      <div className={Styles.PlayList}>
        <p>Index: {currentMusicIndex}</p>
        <p>Name: {currentMusicIndex}</p>
        <AudioPlayer
          style={{
            width: '300px'
          }}
          autoPlayAfterSrcChange={true}
          layout="horizontal-reverse"
          customProgressBarSection={[]}
          showSkipControls={true}
          showJumpControls={false}
          src={playlist[currentMusicIndex].src}
          onClickPrevious={this.handleClickPrevious}
          onClickNext={this.handleClickNext}
          onEnded={this.AutoNextList}
        />
      </div>
    )
  }
}

export default PlayList