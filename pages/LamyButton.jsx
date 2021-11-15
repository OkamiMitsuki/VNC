import Head from "next/dist/shared/lib/head";
import Styles from '../public/css/style.module.css'
import PlayList from "../components/Playlist/PlayList";
import Link from "next/link";
// import { MenuList } from "@material-ui/core";
// import Nav_bar from "../components/Nav_bar/Nav_bar";
// import { VcDataProvider } from '../VcDataConText'

// 'getStaticProps' only works in 'Page' components. It doesn't work in 'Layout' components.
// So we fetch the data here and pass the props down to 'MakeVc'
// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3000/api/VcLamy');
//   const VcData = await res.json();

//   return {
//     props:
//       { VcData },
//   }
// }


export default function Home() {
  return (
    <div className="Styles.Container">
      <Head>
        <title>LamyButton</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{'body { background: url(/patern.png)}'}</style>
      </Head>
      <div className={Styles.ButtonBody}>
        <div className={Styles.About}>
          <Link href="/about" >
            <a >あとがき</a>
          </Link>
        </div>
        {/* <Nav_bar /> */}
        {/* <VcDataProvider VcData={VcData} > */}
        {/* <MenuList /> */}
        <PlayList />
        {/* </VcDataProvider> */}
      </div>
    </div>
  )
}