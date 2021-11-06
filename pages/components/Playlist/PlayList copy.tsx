// https://github.com/lhz516/react-h5-audio-player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Styles from '../../../public/css/style.module.css'
import React, { Component } from 'react'
import ExLoopButton from './ExLoop'

const Vc_directory = "/Lamy/"

interface PlayListState {
  currentMusicIndex: number
  ExLoopType: number
  VcData: object
}

const PlayList = (PlayListState) => {
  state = {
    currentMusicIndex: 0,
    ExLoopType: 0,
  }


  handleClickPrevious = (): void => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex === 0 ? this.props.VcData.length - 1 : prevState.currentMusicIndex - 1,
    }))
  }

  handleClickNext = (): void => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex < this.props.VcData.length - 1 ? prevState.currentMusicIndex + 1 : 0,
    }))
  }
  AutoNextList = (): void => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex < this.props.VcData.length - 1 ? prevState.currentMusicIndex + 1 : 0,
    }))
  }

  LoopNext = (): void => {
    this.setState((LoopState) => ({
      ExLoopType: LoopState.ExLoopType < 1 ? LoopState.ExLoopType + 1 : 0,
    }))
  }


  render(): React.ReactNode {
    this.setState = this.props.VcID
    const { currentMusicIndex } = this.state
    const { ExLoopType } = this.state
    console.log(currentMusicIndex)
    if (ExLoopType == 0) {
      return (
        <div className={Styles.PlayList}>
          <p>Index: {currentMusicIndex}</p>
          <p>Name: {ExLoopType}</p>
          <AudioPlayer
            style={{
              width: '300px'
            }}
            autoPlayAfterSrcChange={true}
            layout="horizontal-reverse"
            customProgressBarSection={[]}
            showSkipControls={true}
            showJumpControls={false}
            loop={false}
            src={Vc_directory + this.props["VcData"][currentMusicIndex]["Src"]}
            onClickPrevious={this.handleClickPrevious}
            onClickNext={this.handleClickNext}
            customAdditionalControls={
              [
                <ExLoopButton onClick={this.LoopNext} LoopType={ExLoopType} />,
              ]
            }
          />
        </div>
      )
    } else if (ExLoopType == 1) {
      return (
        <div className={Styles.PlayList}>
          <p>Index: {currentMusicIndex}</p>
          <p>Name: {ExLoopType}</p>
          <AudioPlayer
            style={{
              width: '300px'
            }}
            autoPlayAfterSrcChange={true}
            layout="horizontal-reverse"
            customProgressBarSection={[]}
            showSkipControls={true}
            showJumpControls={false}
            loop={false}
            src={Vc_directory + this.props.VcData[currentMusicIndex]["Src"]}
            onClickPrevious={this.handleClickPrevious}
            onClickNext={this.handleClickNext}
            onEnded={this.AutoNextList}
            customAdditionalControls={
              [
                <ExLoopButton onClick={this.LoopNext} LoopType={ExLoopType} />,
              ]
            }
          />
        </div>
      )
      // 未使用
    } else if (ExLoopType == 2) {
      return (
        <div className={Styles.PlayList}>
          <p>Index: {currentMusicIndex}</p>
          <p>Name: {ExLoopType}</p>
          <AudioPlayer
            style={{
              width: '300px'
            }}
            autoPlayAfterSrcChange={true}
            layout="horizontal-reverse"
            customProgressBarSection={[]}
            showSkipControls={true}
            showJumpControls={false}
            loop={true}
            src={Vc_directory + this.props.VcData[currentMusicIndex]["Src"]}
            onClickPrevious={this.handleClickPrevious}
            onClickNext={this.handleClickNext}
            // onEnded={this.FauseLoop}
            customAdditionalControls={
              [
                <ExLoopButton onClick={this.LoopNext} LoopType={ExLoopType} />,
              ]
            }
          />
        </div>
      )
    }
  }
}

export default PlayList