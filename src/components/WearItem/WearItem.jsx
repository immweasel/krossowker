import React, { useEffect, useState } from "react";
import styles from './WearItem.module.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';

function WearItem() {

    const [shoes, setShoes] = useState([])

    useEffect(() => {
        const fetchShoes = async () => {
            try {
                const res = await axios.get('http://localhost:3001/wear')
                setShoes(res.data)
            } catch (e) {
                console.log('Error: ', e)
            }
        }

        fetchShoes()
    }, [])


    return (
        <div className={styles.wearItem}>
            {shoes.map(item => (
                <div className={styles.wearItem_card}>
                    <div className={styles.wearItem_card__cont}>
                        <img src={item.img} alt={item.img} className={styles.wearItem_card_img} />
                    </div>
                    <Link to={`/product/${item.id}`} key={item.id}>
                        <p className={styles.wearItem_title}>{item.name}</p>
                    </Link>
                    <p className={styles.wearItem_categ}>{item.category}</p>
                    <p className={styles.wearItem_price}>{item.price} ₽</p>
                </div>
            ))}
        </div>
    )
}

export default WearItem;