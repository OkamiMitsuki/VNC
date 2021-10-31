import Head from "next/dist/shared/lib/head";
import Styles from '../../../public/css/style.module.css'
import VcUpLoadForm from "./VcUpLoadForm";
import VcNameForm from "./VcNameForm";
import CharaSerectForm from "./CharaSerectForm";
import CategorysForm from "./CategorysForm";
import TagForm from "./TagForm";
import Pureview from "./Pureview"


export default function Home() {
  return (
    <div className="Styles.Container">
      <Head>
        <title>LamyButton</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{'body { background: url(/patern.png)}'}</style>
      </Head>
      <div className={Styles.ButtonBody}>
        <VcUpLoadForm />
        <VcNameForm />
        <CharaSerectForm />
        <CategorysForm />
        <TagForm />
        <Pureview />
      </div>
    </div>
  )
}