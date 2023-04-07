import React, { useState } from "react";
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { RxGear } from 'react-icons/rx';
import NavItemCount from "./NavItemCount";
import { Link } from "react-router-dom";
import ModalLogin from "../ModalLogin";
import Search from "./Search/Search";
import headerStyles from "./Header.module.scss";

const Header: React.FC = () => {
    const [authVisible, setAuthVisible] = useState(false);

    const toggleAuthVisible = () => {
        setAuthVisible(prev => !prev)
    }

    return (
        <header>
            <div className="container">
                <div className={headerStyles.header__nav}>
                    <Link to="/" className={headerStyles.logo}>Hagenti</Link>
                    <Link to="/Configurator" className={headerStyles.nav__button}><span>Конфигуратор ПК</span></Link>
                    <Search/>
                    <ul className={headerStyles.nav__list}>
                        <li>
                            <a className={headerStyles.nav__item} onClick={toggleAuthVisible}>
                                <FiUser/>
                                {authVisible && <ModalLogin onClose={toggleAuthVisible}/>}
                                {/*Создать способ вытягивания имени активного пользователя*/}
                                Вадим
                            </a>
                        </li>
                        <li >
                            <Link to={"/"} className={headerStyles.nav__item}>
                                <AiOutlineHeart className="nav-item-icon"/>
                                Избранное
                            </Link>
                        </li>
                        <li>
                            <NavItemCount/>
                            <Link to={"/Cart"} className={headerStyles.nav__item}>
                                <FiShoppingCart className="nav-item-icon"/>
                                Корзина
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )}
export default Header;