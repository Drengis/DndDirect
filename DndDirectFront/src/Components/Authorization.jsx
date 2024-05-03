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

    const handleConfirmClick = async () => {
        const requestData = {
            username: username,
            password: password,
        };

        console.log('Request Data:', requestData);

        const response = await fetch('http://127.0.0.1:8000/users/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });

        const responseData = await response.json();
        console.log('Response Data:', responseData);
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