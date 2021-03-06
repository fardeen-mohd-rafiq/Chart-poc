import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Charts from '../components/charts'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Charts />
    </div>
  )
}

export default Home
