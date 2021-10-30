import { MenuList } from "@material-ui/core";
import Head from "next/dist/shared/lib/head";
import Nav_bar from "../components/Nav_bar/Nav_bar";
import Profile_Box from "../components/Profile_Box/Profile_Box";
import Styles from '../../public/css/style.module.css'
import PlayList from '../PlayList'


export default function Home() {
  return (
    <div className="Styles.Container">
      <Head>
        <title>LamyButton</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{'body { background: url(/patern.png)}'}</style>
      </Head>
      <div className={Styles.ButtonBody}>
        <Nav_bar />
        <MenuList />
        <Profile_Box />
        <PlayList />
      </div>
    </div>
  )
}
