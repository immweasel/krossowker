import React, {useState} from 'react';
import {Link, Routes, Route, useLocation} from 'react-router-dom';
import Menu from "../Menu/Menu";
import styles from './Navbar.module.scss';

import Logo from '../../assets/images/logo.png';

import ProfileIcon from '../../assets/icons/profile.svg';
import BasketIcon from '../../assets/icons/basket.svg';
import SearchIcon from '../../assets/icons/search.svg';
import Baasket from '../Baasket/Baasket';
import Catalog from "../Catalog/Catalog";
import DeliveriesPayment from '../DeliveriesPayment/DeliveriesPayment';
import MainPage from '../MainPage/MainPage';

function Navbar() {
    const [activePath, setActivePath] = useState('/');
    const location = useLocation();

    // Обработчик изменения активного пути
    const handleActivePath = (path) => {
        setActivePath(path);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <Link to={'/'}>
                    <h1 className={styles.navbar_logo}>КРОССОВКЕР.</h1>
                </Link>
                <div className={styles.navbar__links_container}>
                    <Link
                        className={`${styles.navbar_links} ${activePath === '/catalog' ? styles.navbar_active : ''}`}
                        to={'/catalog'}
                        onClick={() => handleActivePath('/catalog')}
                    >
                        Каталог
                    </Link>
                    <Link
                        className={`${styles.navbar_links} ${activePath === '/delivery' ? styles.navbar_active : ''}`}
                        to={'/delivery'}
                        onClick={() => handleActivePath('/delivery')}
                    >
                        Доставка и оплата
                    </Link>
                    <Link
                        className={`${styles.navbar_links} ${activePath === '/about_us' ? styles.navbar_active : ''}`}
                        to={'/about_us'}
                        onClick={() => handleActivePath('/about_us')}
                    >
                        О нас
                    </Link>
                    <Link
                        className={`${styles.navbar_links} ${activePath === '/contact' ? styles.navbar_active : ''}`}
                        to={'/contact'}
                        onClick={() => handleActivePath('/contact')}
                    >
                        Контакты
                    </Link>
                </div>
                <div className={styles.navbar__container}>
                    <Link to={'/Search'}>
                        <img src={SearchIcon} alt="SearchIcon"/>
                    </Link>
                    <Link to={'/Basket'}>
                        <img src={BasketIcon} alt="BasketIcon"/>
                    </Link>
                    <Link to={'/profile'}>
                        <img src={ProfileIcon} alt="ProfileIcon"/>
                    </Link>
                </div>
            </nav>

            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/catalog'} element={<Menu/>}/>
                <Route path={'/delivery'} element={<DeliveriesPayment/>}/>
                <Route path={'/about_us'} element={'about us'}/>
                <Route path={'/contact'} element={'contact'}/>
                <Route path={'/profile'} element={'profile'}/>
                <Route path={'/basket'} element={<Baasket/>}/>
                <Route path={'/search'} element={'profile'}/>
                <Route path={'/catalog-items'} element={<Catalog/>}/>
            </Routes>
        </>
    );
}

export default Navbar;