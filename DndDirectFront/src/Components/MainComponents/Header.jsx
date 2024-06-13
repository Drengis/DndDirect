import React from 'react';
import styles from "./Header.module.css";
import Button from '../MainComponents/Button';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import RegistrationModal from '../../cms/RegStore';
import AuthorizationModal from '../../cms/AuthStore';
import Registration from '../Registr.Auth/Registration';
import Authorization from '../Registr.Auth/Authorization';
import AlertBox from '../AlertBox/AlertBox';
import LogininStore from '../../cms/LogininStore';

const Header = observer(() => {

    return (
        <>
            <div className={styles.Header}>
                <div className={styles.HeaderMain}>
                    <Link to="/"> <Button name='Главная страница' /> </Link>
                    <Link to="/armors/"> <Button name='Доспехи' /> </Link>
                    <Link to="/weapons/"> <Button name='Оружие' /> </Link>
                    <Link to="/spells/"> <Button name='Заклинания' /> </Link>
                    <Link to="/characters/"> <Button name='Персонажи' /> </Link>

                </div>
                <div className={styles.HeaderLogin}>
                    {LogininStore.isAuth === true ? (
                        <div>
                            <Button name='Выйти' onclick={LogininStore.singOut} />
                        </div>
                    ) : (
                        <div>
                            <Button name='Авторизация' onclick={AuthorizationModal.open} />
                            <Button name='Регистрация' onclick={RegistrationModal.open} />
                        </div>
                    )}
                    {RegistrationModal.visible && <Registration />}
                    {AuthorizationModal.visible && <Authorization />}
                </div>
            </div>
            <AlertBox />
        </>
    );
})

export default Header;