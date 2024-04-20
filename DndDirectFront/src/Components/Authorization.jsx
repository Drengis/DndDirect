import React from 'react';
import styles from './Authorization.module.css'
import Modal from './Modal';
import Button from './Button';
import AuthorizationModal from '../cms/AuthStore';
import { observer } from 'mobx-react-lite';

const Authorization = observer(() => {

    const Email = (
        <div key="email" className={`${styles.EmailContainer} input-group flex-nowrap `}>
            <span className={`${styles.EmailLabel} input-group-text bg-dark text-light`}>Почта</span>
            <input
                type="text"
                className={`${styles.EmailInput} form-control bg-dark text-light`}
                aria-describedby="addon-wrapping"
            />
        </div>
    );

    const Password = (
        <div key="password" className={`${styles.PasswordContainer} input-group flex-nowrap `}>
            <span className={`${styles.PasswordLabel} input-group-text bg-dark text-light`}>Пароль</span>
            <input
                type="text"
                className={`${styles.PasswordInput} form-control bg-dark text-light`}
                aria-describedby="addon-wrapping"
            />
        </div>
    );

    const ConfirmButton = (
        <Button name='Подтвердить' />
    )



    return (
        <Modal onclick={AuthorizationModal.close} title="Авторизация" body={[Email, Password]} footer={ConfirmButton} />
    );
})

export default Authorization;