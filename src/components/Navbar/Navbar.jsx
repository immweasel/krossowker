import React, {useState} from 'react';
import {Link, Routes, Route, useLocation} from 'react-router-dom';
import styles from './Navbar.module.scss';
import Catalog from "../Catalog/Catalog";

import Logo from '../../assets/images/logo.png'

import ProfileIcon from '../../assets/icons/profile.svg'
import BasketIcon from '../../assets/icons/basket.svg'
import SearchIcon from '../../assets/icons/search.svg'

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
                    <img src={Logo} alt="logo_image" className={styles.navbar_logo}/>
                </Link>
                <div className={styles.navbar__links_container}>
                    <Link
                        className={`${styles.navbar_links} ${activePath === '/' ? styles.navbar_active : ''}`}
                        to={'/'}
                        onClick={() => handleActivePath('/')}
                    >
                        Главная
                    </Link>
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
                <Route path={'/'} element={'Main page'}/>
                <Route path={'/catalog'} element={<Catalog/>}/>
                <Route path={'/delivery'} element={'delivery'}/>
                <Route path={'/about_us'} element={'about us'}/>
                <Route path={'/contact'} element={'contact'}/>
                <Route path={'/profile'} element={'profile'}/>
                <Route path={'/basket'} element={'profile'}/>
                <Route path={'/search'} element={'profile'}/>
            </Routes>
        </>
    );
}

export default Navbar;
