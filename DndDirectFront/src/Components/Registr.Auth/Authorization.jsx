import React, { useState } from 'react';
import styles from './Authorization.module.css';
import Modal from '../MainComponents/Modal';
import Button from '../MainComponents/Button';
import AuthorizationModal from '../../cms/AuthStore';
import { observer } from 'mobx-react-lite';
import { authorization } from '../../requests/Auth.api'

const Authorization = observer(() => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleConfirm();
        }
    };

    const handleConfirm = () => {
        authorization(username, password);
    };

    const Username = (
        <div key="username" className={`${styles.UsernameContainer} input-group flex-nowrap `}>
            <span className={`${styles.UsernameLabel} input-group-text bg-dark text-light`}>Логин</span>
            <input
                type="text"
                className={`${styles.UsernameInput} form-control bg-dark text-light`}
                aria-describedby="addon-wrapping"
                value={username}
                onChange={handleUsernameChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );

    const Password = (
        <div key="password" className={`${styles.PasswordContainer} input-group flex-nowrap `}>
            <span className={`${styles.PasswordLabel} input-group-text bg-dark text-light`}>Пароль</span>
            <input
                type="password"
                className={`${styles.PasswordInput} form-control bg-dark text-light`}
                aria-describedby="addon-wrapping"
                value={password}
                onChange={handlePasswordChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );

    const ConfirmButton = (
        <Button name="Подтвердить" onclick={handleConfirm} />
    );

    return (
        <Modal onclick={AuthorizationModal.close} title="Авторизация" body={[Username, Password]} footer={ConfirmButton}>
        </Modal>
    );
});

export default Authorization;