import Link from 'next/link'

export default function Drink() {
  return(
    <>
      <h1>Random Drink</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  )
}