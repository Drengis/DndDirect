import React, { useState } from 'react';
import styles from './Authorization.module.css';
import Modal from './Modal';
import Button from './Button';
import AuthorizationModal from '../cms/AuthStore';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import LogininStore from '../cms/LogininStore';

const Authorization = observer(() => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmClick = () => {
        axios
            .post('http://127.0.0.1:8000/token/', {
                username: username,
                password: password,
            })
            .then((response) => {
                if (response.status === 200) {
                    LogininStore.setUsername(username);
                    LogininStore.setPassword(password);
                    LogininStore.setIsAuth(true);
                    console.log('Авторизация успешна')
                } else {
                    console.error('Неверный логин или пароль');
                }
            })
            .catch((error) => {
                console.error('Ошибка при проверке пользователя');
                console.error(error);
            });
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
            />
        </div>
    );

    const ConfirmButton = (
        <Button name="Подтвердить" onclick={handleConfirmClick} />
    );

    return (
        <Modal onclick={AuthorizationModal.close} title="Авторизация" body={[Username, Password]} footer={ConfirmButton}>
        </Modal>
    );
});

export default Authorization;