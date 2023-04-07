import React from "react";
import { SiVk, SiTelegram } from 'react-icons/si';
import footerStyles from "./Footer.module.scss";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <div className={footerStyles.footer__content}>
                    <div className="contacts">
                        <h1>Контакты</h1>
                        <p>+79996667536</p>
                        <h1>Cоц. сети</h1>
                        <div className={footerStyles.social__network__icons}>
                            <a><SiTelegram/></a>
                            <a href="https://vk.com/id473606599"><SiVk/></a>
                        </div>
                    </div>
                    <div className="copyright"><p>Copyright © GlekTeam.com, 2023</p></div>
                </div>
            </div>
        </footer>
    )}
export default Footer;