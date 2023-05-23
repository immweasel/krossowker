import styles from './App.module.scss'
import Navbar from "../Navbar/Navbar";
import Geo from "../Geo/Geo";
import Menu from "../Menu/Menu";

function App() {
    return (
        <div className={styles.container}>
            <section className={styles.header}>
                <Geo/>
                <Navbar/>
            </section>

            <section className={styles.main}>
                <Menu/>
            </section>
        </div>
    );
}

export default App;
