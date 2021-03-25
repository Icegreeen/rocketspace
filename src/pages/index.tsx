
import styles from '../styles/pages/Home.module.css';

import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Companies } from '../components/Companies';

export default function Home() {
  return (
    <div className={styles.container}> 
      <Head>
        <title>Rocketspace</title>
      </Head>

      <Navbar />

      <section>
        <div>

        </div>

      </section>
      
      <section className={styles.companies}>
      <div>
      <Companies />
      </div>
    </section>
      
      
    </div>

  );
}
