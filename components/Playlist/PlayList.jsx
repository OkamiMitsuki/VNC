// https://github.com/lhz516/react-h5-audio-player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Styles from '../../public/css/style.module.css'
import React, { useState, useRef, useEffect } from 'react'
import ExLoopButton from './ExLoop'
import { VcData } from '../../datas/VcLamy'
import Profile_Box from '../Profile_Box/Profile_Box';
import VcArea from '../VcArea';

//ボイスが置かれているディレクトリを指定
const Vc_directory = "/Lamy/"
let LoopMode = null;
// メイン処理開始
const PlayList = (props) => {

  // state宣言
  const [VcState, SetVcState] = useState({
    currentMusicIndex: 0,
    Category: "自己紹介",
  });
  const [ExLoop, SetExLoop] = useState(0);
  // stateを展開
  const currentMusicIndex = VcState.currentMusicIndex;
  const Category = VcState.Category;

  //Playerの制御情報取得
  const player = useRef();
  const Play = () => {
    player.current.audio.current.currentTime = 0;
    player.current.audio.current.play();
  }

  // ローカルストレージに保存
  // useEffect(() => {
  //   SetVcState(JSON.parse(window.localStorage.getItem('VcState')));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('VcState', JSON.stringify(VcState));
  // }, [VcState]);

  // console.log(VcState);

  // PlayList用ステート書き換え関数
  // 前の曲へ　戻るボタンが押された時
  const handleClickPrevious = async (mes) => {
    let IsVcState =
      currentMusicIndex === 0 ? VcData[Category].length - 1 : currentMusicIndex - 1;
    await SetVcState({ ...VcState, currentMusicIndex: IsVcState })
    player.current.audio.current.play();
    return `result_${mes}`
  }
  // 次の曲へ　次へボタンが押される　か　Loopモードが1の時で曲が終了した時
  const handleClickNext = async (mes) => {
    let IsVcState =
      currentMusicIndex < VcData[Category].length - 1 ? currentMusicIndex + 1 : 0;
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

  // ループの条件分岐
  if (ExLoop == 0) { LoopMode = ""; }
  else if (ExLoop == 1) { LoopMode = handleClickNext; }
  else if (ExLoop == 2) { LoopMode = OneLoop; }
  else { LoopMode = ""; }


  return (
    <div>
      <Profile_Box VcState={VcState} SetVcState={SetVcState} Play={Play} className={Styles.Profile_Box} />
      <VcArea VcState={VcState} SetVcState={SetVcState} Play={Play} />
      <div className={Styles.PlayList}>
        <div className={Styles.PlayTitle}>
          <p className={Styles.PlayTxt}>{VcData[Category][currentMusicIndex]["Title"]}</p>
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
          src={Vc_directory + VcData[Category][currentMusicIndex]["Src"]}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={LoopMode}
          customAdditionalControls={
            [
              <ExLoopButton onClick={LoopNext} LoopType={ExLoop} className={Styles.ExLoopButton} />,
            ]
          }
        />
      </div>
    </div>
  )
}

export default PlayList