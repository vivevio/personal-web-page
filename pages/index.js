import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet"></link>
      </Head>

          <div className="ve-container">
            <header className='flex justify-between main-top'>
                <div className="ve-logo">
                  <Image src={`/logo-text.svg`} width={76} height={23} />
                </div>
                <nav className='ve-main-nav flex justify-center items-center'>
                  <a href="#">work</a>
                  <a href="#">about</a>
                  <a href="#">social media</a>
                </nav>
            </header>

            <div className={styles.introContainer}>
              <div className={styles.introAvatar}>
                  <Image src={`/vive-avatar.webp`} width={124} height={124} />
              </div>
              <div className={styles.introContent}>
                <div className='left'>
                  <p>Hi There,</p>
                  <h1>I am Vive <span>Vio</span></h1>
                  <h3>Front End Developer</h3>

                  <a href="#">Download Resume</a>
                </div>
                <div className='right'>
                  <section className={styles.introDetailGroup}>
                    <p className={styles.introDetailLabel}>Email</p>
                    <p className={styles.introDetailValue}>hi@vivevio.co</p>
                  </section>

                  <section className={styles.introDetailGroup}>
                    <p className={styles.introDetailLabel}>Location</p>
                    <p className={styles.introDetailValue}>Jakarta, Indonesia</p>
                  </section>

                  <section className={styles.introDetailGroup}>
                    <p className={styles.introDetailLabel}>Skills</p>
                    <p className={styles.introDetailValue}>React Native, Javascript, HTML, CSS, Laravel</p>
                  </section>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
