import React, { useState } from 'react';
import styles from './CharChanger.module.css';
import Modal from '../Modal';
import CharChangerModal from '../../cms/CharChangerStore';
import { observer } from 'mobx-react-lite';
import Button from '../Button';


const CharChanger = observer(() => {

    const Body = (
        <div>
            Тело
        </div>
    );

    const Footer = (
        <div>
            <Button name='Изменить' />
        </div>

    );


    return (
        <Modal onclick={CharChangerModal.close} title="Окно изменений" body={Body} footer={Footer}>
        </Modal>
    );
});

export default CharChanger