import MakeVc from "./MakeVc"
import Styles from '../../public/css/style.module.css'

const PrfButtons = (props) => {
  return (
    <MakeVc
      className={Styles.PrfButtons}
      Category={"自己紹介"}
      PrfButtons VcState={props.VcState}
      SetVcState={props.SetVcState}
      Play={props.Play}
    />
  )
}
export default PrfButtons