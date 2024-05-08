import React from 'react';
import styles from "./Header.module.css";
import Button from '../Components/Button';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import RegistrationModal from '../cms/RegStore';
import AuthorizationModal from '../cms/AuthStore';
import Registration from '../Components/Registr.Auth/Registration';
import Authorization from '../Components/Registr.Auth/Authorization';

const Header = observer(() => {

    return (
        <>
            <div className={styles.Header}>
                <div className={styles.HeaderMain}>
                    <Link to="/"> <Button name='Главная страница' /> </Link>
                    <Link to="/armors/"> <Button name='Доспехи' /> </Link>
                    <Link to="/weapons/"> <Button name='Оружие' /> </Link>
                    <Link to="/spells/"> <Button name='Заклинания' /> </Link>
                    <Link to="/charecters/"> <Button name='Персонажи' /> </Link>
                </div>
                <div className={styles.HeaderLogin}>
                    <Button name='Авторизация' onclick={AuthorizationModal.open} />
                    <Button name='Регистрация' onclick={RegistrationModal.open} />
                    {RegistrationModal.visible && <Registration />}
                    {AuthorizationModal.visible && <Authorization />}

                </div>
            </div>
        </>
    );
})

export default Header;