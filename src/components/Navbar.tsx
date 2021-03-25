import styles from '../styles/components/Navbar.module.css';


export function Navbar () {
    return (
        <div className={styles.navbarContainer}>
            
                <img src="img/logo-header.png" alt="logo" />
            <nav>
                <ul>
                    <li><a aria-current="page" href="">Home</a></li>
                    <li><a aria-current="page" href="">Store</a></li>
                    <li><a aria-current="page" href="">Simulation</a></li>
                    <li><a aria-current="page" href="">About</a></li>
                </ul>

            </nav>

            <div className={styles.wrap}>
                    <div>
                        <input type="text"  placeholder="Search" />
                    <button type="submit" >
                        <img src="img/search2.png" />
                    </button>
                    </div>
            </div>

           
            <div className={styles.buttonLogin}>
                    <a href="">Login</a>  
            </div>
            
        </div>
    );
}





