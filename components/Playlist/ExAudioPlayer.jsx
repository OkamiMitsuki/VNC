import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Styles from '../../../public/css/style.module.css'
import ExLoopButton from './ExLoop'

const ExAudioPlayer = () => {

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
          onClickPrevious={ChangeState}
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
    console.log(VcState)
    return (
      <p>ERROR</p>
    )
  }
}
export default ExAudioPlayer;