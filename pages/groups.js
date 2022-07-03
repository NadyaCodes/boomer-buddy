import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router'

export default function Groups() {
  const router = useRouter()
  const { user } = router.query
  
  return (
    <>
      <Head>
        <title>Groups</title>
      </Head>
      <h1>Groups</h1>
      <button>
      <Link href={{
        pathname: "/home",
        query: {
          user
        }}} as={`home/${user}`}
      >
        <a>Back to home</a>
      </Link>
      </button>
    </>
  )
}