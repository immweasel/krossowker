import React, { useState, useEffect } from "react";
import styles from './WearItem.module.scss'
import axios from "axios";

function CardItem() {
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
        <>
            {shoes.map(item => (
                <div className={styles.wearItem_card}>
                    <div className={styles.wearItem_card__cont}>
                        <img src={item.img} alt={item.img} className={styles.wearItem_card_img} />
                    </div>
                    <p className={styles.wearItem_title}>{item.name}</p>
                    <p className={styles.wearItem_categ}>{item.category}</p>
                    <p className={styles.wearItem_price}>{item.price} ₽</p>
                </div>
            ))}
        </>
    )
}

export default CardItem