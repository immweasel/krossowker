import React, {useState, useEffect} from "react";
import styles from './WearItem.module.scss'
import axios from "axios";

import ShoePuma from '../../assets/images/shoe1.png'

function CardItem() {
    // const [shoes, setShoes] = useState([])
    //
    // useEffect(() => {
    //     const fetchShoes = async () => {
    //         try {
    //             const res = await axios.get('http://localhost:3001/wear')
    //             setShoes(res.data)
    //         } catch (e) {
    //             console.log('Error: ', e)
    //         }
    //     }
    //     fetchShoes()
    // })

    return (
        <>
            <div className={styles.wearItem_card}>
                <img src={ShoePuma} alt={'shoe-puma'}/>
                <p className={styles.wearItem_title}>Vans Ultrarange Exo Hi</p>
                <p className={styles.wearItem_categ}>Мужские кроссовки</p>
                <p className={styles.wearItem_price}>11 500 ₽</p>
            </div>
        </>
    )
}

export default CardItem