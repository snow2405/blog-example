// pages/404.js
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import styles from '/components/layout.module.css';
import Link from 'next/link';

export default function Custom404({home}) {
    return (
        <div className={styles.container}>
    {/*      <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="description"
              content="404-page"
            />
           
         </Head>*/}
    <header className={styles.header}>
    
      <>
        <Image
          priority
          src="/images/404.jpg"
          className={utilStyles.borderCircle}
          height={250}
          width={250}
          alt={"404 meme"}
        />
        <h1 className={utilStyles.heading2Xl}>{"Error 404"}</h1>
      </>
    
  </header>


  <p class="message">
       This site (sadly) does not exist...
  </p>


 {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}


  </div>
    );
}