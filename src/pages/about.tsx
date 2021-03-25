import Head from 'next/head';
import { Navbar } from '../components/Navbar';

import styles from '../styles/components/about/About.module.css';

export default function About () {
    return (
        <div className={styles.container}>
            <Navbar />

        <div className={styles.about}>
            <section>

            </section>
        </div>
        </div>
    )
}