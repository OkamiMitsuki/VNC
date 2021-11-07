// https://github.com/lhz516/react-h5-audio-player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Styles from '../../../public/css/style.module.css'
import React, { Component, useState } from 'react'
import ExLoopButton from './ExLoop'

const Vc_directory = "/Lamy/"
const PlayList = (props) => {
  const [ExLoop, SetExLoop] = useState(0);
  // stateを展開
  const VcState = props.VcState;
  const currentMusicIndex = VcState.currentMusicIndex;
  const VcData = VcState.VcData;
  const SetVcState = props.SetVcState;
  // PlayList用ステート書き換え関数
  // 前の曲へ　戻るボタンが押された時
  const handleClickPrevious = () => {
    let IsVcState =
      currentMusicIndex === 0 ? VcData.length - 1 : currentMusicIndex - 1;
    SetVcState({ ...VcState, currentMusicIndex: IsVcState })
  }
  // 次の曲へ　次へボタンが押される　か　Loopモードが1の時で曲が終了した時
  const handleClickNext = () => {
    let IsVcState =
      currentMusicIndex < VcData.length - 1 ? currentMusicIndex + 1 : 0;
    SetVcState({ ...VcState, currentMusicIndex: IsVcState })
  }
  // リピート再生　ループモードが2の時
  const LoopNext = () => {
    SetExLoop(ExLoop < 1 ? ExLoop + 1 : 0);
  }
  console.log("PlayerIndex:", currentMusicIndex)
  if (ExLoop == 0) {
    return (
      <div className={Styles.PlayList}>
        <p>Index: {currentMusicIndex}</p>
        <p>Name: {VcData[currentMusicIndex]["Title"]}</p>
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
          src={Vc_directory + VcData[currentMusicIndex]["Src"]}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          customAdditionalControls={
            [
              <ExLoopButton onClick={LoopNext} LoopType={ExLoop} />,
            ]
          }
        />
      </div>
    )
  } else if (ExLoop == 1) {
    return (
      <div className={Styles.PlayList}>
        <p>Index: {currentMusicIndex}</p>
        <p>Name: {VcData[currentMusicIndex]["Title"]}</p>
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
          src={Vc_directory + VcData[currentMusicIndex]["Src"]}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
          customAdditionalControls={
            [
              <ExLoopButton onClick={LoopNext} LoopType={ExLoop} />,
            ]
          }
        />
      </div>
    )
    // 未使用
  } else if (ExLoop == 2) {
    return (
      <div className={Styles.PlayList}>
        <p>Index: {currentMusicIndex}</p>
        <p>Name: {ExLoop}</p>
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
          src={Vc_directory + VcData[currentMusicIndex]["Src"]}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          // onEnded={this.FauseLoop}
          customAdditionalControls={
            [
              <ExLoopButton onClick={LoopNext} LoopType={ExLoop} />,
            ]
          }
        />
      </div>
    )
  } else {
    return (
      <p>ERROR</p>

    )

  }

}

export default PlayList