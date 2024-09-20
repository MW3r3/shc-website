// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import styles from './/page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SHC Robotics</title>
        <meta name="description" content="SHC Robotics team page" />
        <link
  rel="icon"
  href="/gear.svg"
  type="image/svg+xml"
  sizes="any"
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.leftSide}>
        <div className={styles.headerText}>
          <p>SHACSHUCA ROBOTICS</p>
        </div>
        <nav className={styles.nav}>
          <a href="#">Ana Sayfa</a>
          <a href="#">Takım</a>
          <a href="#">Projeler</a>
          <a href="#">Dergi</a>
        </nav>
        <div className={styles.gearContainer}>
          <Image 
            src="/logo.svg"
            alt="Logo Gear"
            width={156}  
            height={156}
            className={styles.gearVector}
          />
        </div>
        </div>
        <div className={styles.contact}>
          <a href="#">Contact</a>
          <a href="#">
            <Image src="https://placehold.co/24" alt="English" width={24} height={24} />
          </a>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.introContainer}>
          <div className={styles.introTextContainer}>
            <Image src="https://placehold.co/20" alt="Robot" width={20} height={20} />
            <h1>SHC ROBOTICS</h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur...</p>
          </div>
          <Image src="https://placehold.co/400" alt="Robot" width={400} height={400} />
        </section>

        <section className={styles.values}>
          <h2>DEĞERLERİMİZ</h2>
          <div className={styles.valueGrid}>
            <Image src="https://placehold.co/200" alt="Value 1" width={200} height={200} />
            <Image src="https://placehold.co/200" alt="Value 2" width={200} height={200} />
            <Image src="https://placehold.co/200" alt="Value 3" width={200} height={200} />
            <Image src="https://placehold.co/200" alt="Value 4" width={200} height={200} />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© SHC Robotics - 2024</p>
      </footer>
    </div>
  );
}
