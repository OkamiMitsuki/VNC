import Styles from '../../../public/css/style.module.css'

export default function GetPrfImg() {
  return <img className={Styles.imgs}
    src={`/Lamy/LamyPrf2.png`}
    alt={`ラミィの画像`}
    title={`プロフィール画像`} />;
}