import Link from 'next/link'
import Head from 'next/head'



export default function Fact() {
  return(
    <>
      <Head>
        <title>Random Fact</title>
      </Head>
      <h1>Random Fact</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  )
}