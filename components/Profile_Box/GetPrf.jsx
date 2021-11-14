import { names } from "../../datas/names";
import Styles from '../../public/css/style.module.css'

const GetPrf = (props) => {
  return (
    <>
      <p className={Styles.PrfTxt}>{names.lamy[props.txt]}</p>
    </>
  )
}

export default GetPrf