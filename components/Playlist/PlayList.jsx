// https://github.com/lhz516/react-h5-audio-player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Styles from '../../public/css/style.module.css'
import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import ExLoopButton from './ExLoop'

//ボイスが置かれているディレクトリを指定
const Vc_directory = "/Lamy/"

// メイン処理開始
const PlayList = React.forwardRef((props, ref) => {
  const [ExLoop, SetExLoop] = useState(0);
  // stateを展開
  const VcState = props.VcState;
  const currentMusicIndex = VcState.currentMusicIndex;
  const VcData = VcState.VcData;
  const SetVcState = props.SetVcState;

  //Playerの制御情報取得
  const player = useRef();
  const Start = () => { player.current.audio.current.play() }
  useImperativeHandle(ref, () => ({
    play: () => {
      player.current.Start;
    }
  }));

  // PlayList用ステート書き換え関数
  // 前の曲へ　戻るボタンが押された時
  const handleClickPrevious = async (mes) => {
    let IsVcState =
      currentMusicIndex === 0 ? VcData.length - 1 : currentMusicIndex - 1;
    await SetVcState({ ...VcState, currentMusicIndex: IsVcState })
    player.current.audio.current.play();
    return `result_${mes}`
  }
  // 次の曲へ　次へボタンが押される　か　Loopモードが1の時で曲が終了した時
  const handleClickNext = async (mes) => {
    let IsVcState =
      currentMusicIndex < VcData.length - 1 ? currentMusicIndex + 1 : 0;
    await SetVcState({ ...VcState, currentMusicIndex: IsVcState })
    player.current.audio.current.play();
    return `result_${mes}`
  }

  // ループモードの変更ループボタンが押された時
  const LoopNext = () => {
    SetExLoop(ExLoop < 2 ? ExLoop + 1 : 0);
  }
  // 1曲のループ
  const OneLoop = () => {
    player.current.audio.current.play();
  }


  console.log("PlayerIndex:", currentMusicIndex)
  if (ExLoop == 0) {
    return (
      <div className={Styles.PlayList}>
        <div className={Styles.PlayTitle}>
          <p className={Styles.PlayTxt}>{currentMusicIndex}/{VcData.length}</p>
          <p className={Styles.PlayTxt}>{VcData[currentMusicIndex]["Title"]}</p>
        </div>
        <AudioPlayer
          ref={player}
          style={{
            width: '300px',
            height: "60px"
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
          ref={player}
        />
      </div>
    )
    // 未使用
  } else if (ExLoop == 2) {
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
          loop={true}
          src={Vc_directory + VcData[currentMusicIndex]["Src"]}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={OneLoop}
          customAdditionalControls={
            [
              <ExLoopButton onClick={LoopNext} LoopType={ExLoop} />,
            ]
          }
          ref={player}
        />
      </div>
    )
  } else {
    return (
      <p>ERROR</p>

    )

  }

});

export default PlayList