import React, { useState } from 'react';
import styles from './Registration.module.css';
import Modal from './Modal';
import RegistrationModal from '../cms/RegStore';
import { observer } from 'mobx-react-lite';
import Button from './Button';
import Alert from './Alert';

const Registration = observer(() => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const checkUsernameAndEmail = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/users');
            if (response.ok) {
                const data = await response.json();
                const exists = data.some(user => user.username === username || user.email === email);
                if (exists) {
                    if (data.some(user => user.username === username)) {
                        console.log('Такой логин уже существует');
                    }
                    if (data.some(user => user.email === email)) {
                        console.log('Такая почта уже существует');
                    }
                } else {
                    handleRegistration();
                }
            } else {
                console.error('Ошибка при проверке логина и почты');
            }
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
    };

    const handleRegistration = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password,
                }),
            });

            if (response.ok) {
                console.log('Пользователь успешно создан');
            } else {
                console.error('Ошибка при создании пользователя');
            }
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
    };

    const Email = (
        <div key="email" className={`${styles.EmailContainer} input-group flex-nowrap `}>
            <span className={`${styles.EmailLabel} input-group-text bg-dark text-light`}>Почта</span>
            <input
                type="text"
                className={`${styles.EmailInput} form-control bg-dark text-light`}
                aria-describedby="addon-wrapping"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
    );

    const Username = (
        <div key="username" className={`${styles.UsernameContainer} input-group flex-nowrap `}>
            <span className={`${styles.UsernameLabel} input-group-text bg-dark text-light`}>Логин</span>
            <input
                type="text"
                className={`${styles.UsernameInput} form-control bg-dark text-light`}
                aria-describedby="addon-wrapping"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
    );

    const ConfirmButton = <Button name="Подтвердить" onclick={checkUsernameAndEmail} />;

    return (
        <Modal onclick={RegistrationModal.close} title="Регистрация" body={[Email, Username, Password]} footer={ConfirmButton}>
        </Modal>
    );
});

export default Registration