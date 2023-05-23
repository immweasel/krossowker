import React from "react";
import styles from './Footer.module.scss'

import Logo from '../../assets/images/logo.png'
import VkIcon from '../../assets/icons/vk.svg'
import InstaIcon from '../../assets/icons/instagram.svg'
import TwitterIcon from '../../assets/icons/twitter.svg'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__social}>
                <img src={Logo} alt="Logo-Img" className={styles.footer_logo}/>

                <div>
                    <p className={styles.footer__social_descr}>Мы в социальных сетях</p>
                    <div className={styles.footer__social_icon_container}>
                        <img src={VkIcon} alt="VkIcon" className={styles.footer_icon} onClick={''}/>
                        <img src={InstaIcon} alt="InstaIcon" className={styles.footer_icon}/>
                        <img src={TwitterIcon} alt="TwitterIcon" className={styles.footer_icon}/>
                    </div>
                </div>
            </div>

            <div className={styles.footer__about}>
                <div className={styles.footer__about_container}>
                    <a href="" className={styles.footer__about_links}>Скидки</a>
                    <a href="" className={styles.footer__about_links}>Адреса магазинов</a>
                    <a href="" className={styles.footer__about_links}>Обмен и возврат</a>
                    <a href="" className={styles.footer__about_links}>support@krossovker.ru</a>
                </div>

                <button className={styles.footer__about_btn}>
                    ВОЙТИ В ЛИЧНЫЙ КАБИНЕТ
                </button>
            </div>
        </div>
    )
}

export default Footer;