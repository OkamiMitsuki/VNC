import { MenuList } from "@material-ui/core";
import Head from "next/dist/shared/lib/head";
import Nav_bar from "../components/Nav_bar/Nav_bar";
import Profile_Box from "../components/Profile_Box/Profile_Box";
import Styles from '../../public/css/style.module.css'
// import { VcDataProvider } from '../VcDataConText'

// 'getStaticProps' only works in 'Page' components. It doesn't work in 'Layout' components.
// So we fetch the data here and pass the props down to 'MakeVc'
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/VcLamy');
  const VcData = await res.json();

  // This message will be output to the terminal window where we run 'npm run dev'
  console.log('getStaticProps called', { VcData });
  return {
    props:
      { VcData },
  }
}

export default function Home({ VcData }) {
  return (
    <div className="Styles.Container">
      <Head>
        <title>LamyButton</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{'body { background: url(/patern.png)}'}</style>
      </Head>
      <div className={Styles.ButtonBody}>
        <Nav_bar />
        {/* <VcDataProvider VcData={VcData} > */}
        <MenuList />
        <Profile_Box VcData={VcData} />
        {/* </VcDataProvider> */}
      </div>
    </div>
  )
}