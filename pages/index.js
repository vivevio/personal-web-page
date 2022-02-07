import Head from 'next/head'
import Image from 'next/image'
import MainNav from '../components/MainNav'
import SliderPortfolio from '../components/SliderPortfolio'
import SocialMedia from '../components/SocialMedia'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vive Vio Permana</title>
        <meta name="description" content="Hi, I am Front End Developer from Indonesia" />

        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon.ico" />
        <link rel="icon" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet"></link>
      </Head>

          <div className={styles.bigLogoSide}>
            <Image src={`/big-vivevio.svg`} width={143} height={777} />
          </div>
          
          <div className="ve-container">
            <header className='flex justify-between main-top'>
                <div className="ve-logo">
                  <Image src={`/logo-text.svg`} width={76} height={23} />
                </div>
                
                <MainNav />
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

          <div className={styles.portfolioContainer} id="work">
            <div className="ve-container">
                <h2 className='section-title'>Projects That I Have Worked On <span /></h2>
                <SliderPortfolio />
            </div>
          </div>

          <footer className={styles.footerSection} id="social-media">
            <div className="ve-container flex justify-between items-end">
              <div>
                <h3>Social Media</h3>
                <p>The place that sometimes I put my random thought</p>
              </div>

              <div>
                <SocialMedia />
              </div>
            </div>
          </footer>
    </div>
  )
}
