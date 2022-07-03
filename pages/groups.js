import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
let socket

export default function Groups() {
  const router = useRouter()
  const { user } = router.query
  const [input, setInput] = useState('')

  useEffect(() => {socketInitializer()}, [])

  const socketInitializer = async () => {
    await fetch('/api/socket')
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on('update-input', msg => {
      setInput(msg)
    })
  }

  

  const onChangeHandler = (e) => {
    setInput(e.target.value)
    socket.emit('input-change', e.target.value)
  }

  return (
    <>
      <Head>
        <title>Groups</title>
      </Head>
      <h1>Groups</h1>
      <input placeholder='Type Something'
      value={input}
      onChange={onChangeHandler}
      />

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