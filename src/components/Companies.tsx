import styles from '../styles/components/Companies.module.css';

export function Companies () {
    return (
            <section className={styles.companies}>
                <h1>Companies</h1>
                <div>
                    <div>
                        <img src="img/rocketseat.png" alt=""/>
                    </div>
                    <div>
                       <img src="img/starlink.png" alt=""/>
                    </div>

                    <div>
                      <img src="img/spacex.png" alt=""/>
                    </div>
                </div>
            </section>
    ) 
} 