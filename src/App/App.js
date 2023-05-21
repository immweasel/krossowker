import styles from './App.module.scss'
import Navbar from "../components/Navbar/Navbar";
import Geo from "../components/Geo/Geo";

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
