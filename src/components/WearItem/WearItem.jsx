import React from "react";
import styles from './WearItem.module.scss'
import CardItem from "./CardItem";

function WearItem() {
    return (
        <div className={styles.wearItem}>
            <CardItem/>
        </div>
    )
}

export default WearItem;