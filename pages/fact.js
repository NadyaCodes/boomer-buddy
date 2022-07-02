import Link from 'next/link'
import Head from 'next/head'

export async function findFact() {
  const data = await fetch('https://uselessfacts.jsph.pl/random.json?language=en')
  const jsonData = await data.json()

  const fact = jsonData.text

  return fact;
}


export async function getStaticProps() {

  const factData = await findFact()
  return {
    props: {
      factData,
    }
  }

}



export default function Fact( {factData} ) {
  return(
    <>
      <Head>
        <title>Random Fact</title>
      </Head>
      <h1>Random Fact</h1>
      <p>{factData}</p>
      <button><Link href="/">
        <a>Back to home</a>
      </Link></button>
    </>
  )
}