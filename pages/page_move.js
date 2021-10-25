import Link from "next/link";
import Head from "next/dist/shared/lib/head";

const products = [{ NAME: "bag" }, { NAME: "shoes" }, { NAME: "socks" }];
const Home = () => {
  return (
    <div>
      <Head>
        <title>ラミィボタン</title>
      </Head>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.NAME}>
              <Link href={`/products/${product.NAME}`} >
                <a>{product.NAME}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <h1>hello</h1>
    </div>
  );
}

export default Home