import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
      <div>
        <Head>
          <title>My page title</title>
        </Head>

        <main>
          Welcome to My Search App
        </main>
      </div>
  )
}

export default Home
