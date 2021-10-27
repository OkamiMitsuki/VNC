import { MenuList } from "@material-ui/core";
import Head from "next/dist/shared/lib/head";
import Nav_bar from "../../components/Nav_bar/Nav_bar";
import Profile_Box from "../../components/Profile_Box/Profile_Box";
import { makeStyles } from "@material-ui/core";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LamyButton</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Lamy</h1>
      <Nav_bar></Nav_bar>
      <MenuList></MenuList>
      <Profile_Box></Profile_Box>
    </div>
  )
}
