// import { useRouter } from "next/router";
import { useRouter } from "next/dist/client/router";
export default function Name() {
  const router = useRouter();
  console.log(JSON.stringify(router.query))
  return <h1>{router.query.NAME}のページです</h1>;
}