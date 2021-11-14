import GetPrfImg from "./GetPrfImg"
import GetPrf from "./GetPrf"
import PrfButtons from "./PrfButtons";
import GetPrfLinks from "./GetPrfLinks";
import Styles from '../../../public/css/style.module.css'

const Profile_Box = (props) => {
  // const { VcState, SetVcState } = useVcDataContext();
  return (
    <div className={Styles.PrfGrid}>
      <div className={Styles.PrfImg}><GetPrfImg /></div>
      <div className={Styles.Rubi}><GetPrf txt={`ENname`} /></div>
      <div className={Styles.Name}><GetPrf txt={`JPname`} /></div>
      <div className={Styles.OsiMark}><GetPrf txt={`mark`} /></div>
      <div className={Styles.PrfButtons}><PrfButtons VcState={props.VcState} SetVcState={props.SetVcState} Play={props.Play} /></div>
      <div className={Styles.LinkBar}><GetPrfLinks /></div>
    </div>
  )
}

export default Profile_Box