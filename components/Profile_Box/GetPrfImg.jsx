import Styles from '../../public/css/style.module.css'

export default function GetPrfImg() {
  return <video
    className={Styles.GetPrfImg}
    muted
    autoPlay
    playsInline
    loop
    src="/Lamy/idol.mp4"
  />;
}