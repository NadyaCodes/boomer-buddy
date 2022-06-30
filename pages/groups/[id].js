import Link from 'next/link';
import Head from 'next/head';

export default function Groups() {
  return (
    <>
      <Head>
        <title>Groups</title>
      </Head>
      <h1>My Dictionary</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  )
}