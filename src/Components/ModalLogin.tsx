import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineXMark } from 'react-icons/hi2'

type ModalLoginProps = {
    onClose: () => void;
}

const ModalLogin: React.FC<ModalLoginProps> = ({onClose}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return(
        <>
            <div className="modal active" >
                <div className="modal-content" onClick={onClose}>
                    <div className="p-relative">
                        <h2>Вход</h2>
                        <HiOutlineXMark className="modal__close__button" onClick={onClose}/>
                    </div>
                    <form>
                        <input type="email" className="inputText" placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" className="inputText" placeholder="Пароль" 
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}/>
                        <button className="green__button" onClick={e => {e.preventDefault()}}>Продолжить</button>
                    </form>
                    <p className="pad-t-15">Нет аккаунта? <Link to="/Register" onClick={onClose}>Регистрация</Link></p>
                </div>
            </div>
        </>
    );
}

export default ModalLogin;