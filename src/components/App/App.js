import styles from './App.module.scss'
import Navbar from "../Navbar/Navbar";
import Geo from "../Geo/Geo";

function App() {
    return (
        <div className={styles.container}>
            <section className={styles.header}>
                <Geo/>
                <Navbar/>
            </section>
        </div>
    );
}

export default App;
