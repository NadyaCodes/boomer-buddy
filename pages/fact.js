import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  const { user } = router.query
  
  return(
    <>
      <Head>
        <title>Random Fact</title>
      </Head>
      <h1>Random Fact</h1>
      <p>{factData}</p>
      <button>
      <Link href={{
        pathname: "/home",
        query: {
          user
        }}} as={`home/${user}`}
      >
        <a>Back to home</a>
      </Link></button>
    </>
  )
}