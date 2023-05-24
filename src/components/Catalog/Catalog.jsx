import React from "react";
import styles from './Catalog.module.scss'
import CategoriesList from "../CategoriesItem/CategoriesList";

function Catalog() {


    return (
        <div className={styles.catalog}>
            <h1 style={{
                color: '#fff'
            }}>Каталог</h1>

            <CategoriesList/>
        </div>
    )
}

export default Catalog;