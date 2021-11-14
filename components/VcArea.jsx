import MakeVc from "./Profile_Box/MakeVc";
import { VcData } from "../datas/VcLamy";
import Styles from '../public/css/style.module.css'

const VcArea = (props) => {
  return (
    <ul className={Styles.VcArea}>
      {
        Object.keys(VcData).map(key =>
          <li key={key} >
            <p>{key}</p>
            <MakeVc
              Category={key}
              PrfButtons VcState={props.VcState}
              SetVcState={props.SetVcState}
              Play={props.Play}
            />
          </li>
        )
      }
    </ul>
  )
}
export default VcArea