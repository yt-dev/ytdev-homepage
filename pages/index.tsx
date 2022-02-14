import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>yt&apos;s homepage</h1>

        <p className={styles.description}>🛠 In development.</p>
      </main>
    </div>
  )
}

export default Home
