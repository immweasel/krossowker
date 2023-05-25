import React, { useState } from "react";

import styles from './Baasket.module.scss';
import shoe1 from '../../assets/images/shoe1.jpg';
import minus from '../../assets/images/Минус.svg';
import plus from '../../assets/images/Плюс.svg';
import krest from '../../assets/images/Крест.svg';

const ProductCounter = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(11500); 
  const [totalPrice, setTotalPrice] = useState(11500);

  const increment = () => {
    setCount(count + 1);
    setTotalPrice(totalPrice + price);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setTotalPrice(totalPrice - price);
    }
  };

  return (
    <div className={styles.baasket}>
      <h1 className={styles.baasket__name}>КОРЗИНА</h1>
			<p className={styles.baasket__desc}>2 товара</p>
			<div className={styles.baasket__main}>
				<div className={styles.baasket__photos}>
					<div className={styles.baasket__photos_card}>
						<img className={styles.baasket__photos_first} src={shoe1} alt="Кроссовки"></img>
						<div className={styles.baasket__photos_descr}>
							<h3 className={styles.baasket__photos_name}>Nike Air Max 90</h3>
							<p className={styles.baasket__photos_desc}>Цвет: чёрный</p>
							<p className={styles.baasket__photos_desc}>Размер: 42</p>
							<p className={styles.baasket__photos_desc}>Артикул:4QEU84DJ324</p>
							<div className={styles.baasket__photos_counter}>
								<button className={styles.baasket__photos_btn} onClick={decrement}><img src={minus}></img></button>
								<p className={styles.baasket__photos_count}>{count}</p>
								<button className={styles.baasket__photos_btn} onClick={increment}><img src={plus}></img></button>
							</div>
						</div>
						<div className={styles.baasket__photos_prices}>
							<button className={styles.baasket__photos_btn}><img src={krest}></img></button>
							<p className={styles.baasket__photos_price}>{totalPrice} ₽</p>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default ProductCounter;