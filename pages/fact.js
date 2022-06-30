import Link from 'next/link'

export default function Fact() {
  return(
    <>
      <h1>Random Fact</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  )
}