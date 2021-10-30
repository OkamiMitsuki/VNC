import { GetStaticProps } from "next";
import GetVcs from "./GetVcs";

export async function GetStaticProps() {
  const Vcdata = GetVcs()
  return {
    props: {
      Vcdata
    }
  }
}

export default GetVcData