import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Login from './login'
import Logout from './logout'
import React, {useState, useEffect} from 'react'
import cookies from 'next-cookies'

// async function getInitialProps(ctx) {
//   return {
//     user: cookies(ctx).user || ''
//   }
// }

// export async function getStaticProps(ctx) {

//   // const factData = await findFact()
//   console.log(cookies(ctx).user)
//   console.log(cookies(ctx))
//   return {
//     props: {
//       user: cookies(ctx).user || ''
//     }
//   }

// }

export default function Home() {
  // const [user, setUser] = useState("")

  // useEffect(() => {
  //   setUser(1)
  // }, []);

  // console.log("user", user)
  // console.log("user", {user})

  let user = 2;


  return (
    <div className={styles.container}>
      <Head>
        <title>Boomer Buddy</title>
        <meta name="description" content="App for boomers to understand the young folx" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        {/* <Login/> */}
        
      {/* <Login/>
      <Logout/> */}
      <Logout />
        <h1 className={styles.title}>
          Welcome to Boomer Buddy
        </h1>
        

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <Link href={'/dictionary/' + user}>
            <a className={styles.card}>
              <h2>Dictionary &rarr;</h2>
              <p>Save defintions for your youngun's most commonly used slang</p>
            </a>
          </Link>
          {/* <a href="https://nextjs.org/docs" className={styles.card}>

          </a> */}

          <Link href={'/groups/' + user}>
            <a className={styles.card}>
              <h2>Groups &rarr;</h2>
              <p>Chat about things with your friend groups</p>
            </a>
          </Link>

          <Link href="/fact">
          <a className={styles.card} >
            <h2>Random Fact &rarr;</h2>
            <p>Learn one new thing to keep your mind sharp</p>
          </a>

          </Link>


          <Link href="/drink">
            <a className={styles.card} >
              <h2>Random Drink &rarr;</h2>
              <p>
                Because you'll probably need this later...
              </p>
            </a>
          </Link>

        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}