import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LoginForm from '../components/LoginForm'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>unnamed</title>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      
      <nav>
        <ul>
          <li>BROWSE</li>
          <li>SIGN UP</li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          UNNAMED
        </h1>

        <LoginForm />
      </main>

      <footer>
        <nav>
          <ul>
            <li>FAQ</li>
            <li>FEEDBACK</li>
            <li>SUPPORT</li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}
