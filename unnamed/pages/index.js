import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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

        <section>
          <form>
            <input type="email" name="username" placeholder="USERNAME" />
            <br/><br/>
            <input type="password" name="password" placeholder="PASSWORD" />
            <br/><br/>
            <input type="submit" value="LOG IN" />
          </form>
        </section>
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
