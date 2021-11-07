import GetPrfImg from "./GetPrfImg"
import GetPrf from "./GetPrf"
import PrfButtons from "./MakeVc"
import PrfLinks from "./PrfLinks"
import Styles from '../../../public/css/style.module.css'

const Profile_Box = ({ VcData }) => {
  // const { VcState, SetVcState } = useVcDataContext();
  return (
    <div className={Styles.PrfGrid}>
      <div className={Styles.PrfImg}><GetPrfImg /></div>
      <div className={Styles.Rubi}><GetPrf txt={`ENname`} /></div>
      <div className={Styles.Name}><GetPrf txt={`JPname`} /></div>
      <div className={Styles.OsiMark}><GetPrf txt={`mark`} /></div>
      <div className={Styles.PrfButtons}><PrfButtons VcData={VcData} /></div>
      <div className={Styles.LinkBar}><PrfLinks /></div>
      {/* <button onClick={() => SetVcState({ ...VcState, Track: + 1 })}>
        next track
      </button>
      <p>{VcState}</p> */}
    </div>
  )
}

export default Profile_Box