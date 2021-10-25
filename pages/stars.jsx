import fetch from 'node-fetch'

function BuildTimeStars({ stars, build_time }) {
  return <div>ビルド時 ({build_time}) のNestのstar数は:{stars}</div>
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  const stars = json.stargazers_count

  const build_time = new Date().toString();

  return {
    props: {
      stars,
      build_time
    },
  }
}

export default BuildTimeStars