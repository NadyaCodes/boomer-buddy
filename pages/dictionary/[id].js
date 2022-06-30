import Link from 'next/link';
import Head from 'next/head';


export default function DictionaryEntries() {
  return (
    <>
      <Head>
        <title>Dictionary</title>
      </Head>
      <h1>My Dictionary</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  )
}