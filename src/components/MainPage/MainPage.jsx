import React from "react";
import styles from './MainPage.module.scss'
import MainScreen from '../../assets/images/main_screen.jpg'

function MainPage() {
    return (
        <div className={styles.mainPage}>
            <div className="main__scroller">
                <img src={MainScreen} alt="Скроллер" className="main__scroller"/>
            </div>
        </div>
    )
}

export default MainPage;