import React, { useState } from 'react';
import styles from './CharChanger.module.css';
import axios from 'axios';
import Modal from '../Modal';
import CharChangerModal from '../../cms/CharChangerStore';
import { observer } from 'mobx-react-lite';
import Button from '../Button';
import Input from '../Input';
import BaseCharInfoStore from '../../cms/BaseCharInfoStore';
import CharacteristicStore from '../../cms/CharacteristicStore';
import LogininStore from '../../cms/LogininStore';
import AlertStore from '../../cms/AlertStore';

const CharChanger = observer(() => {
    const fieldInfo = {
        name: {
            label: 'Имя',
            value: BaseCharInfoStore.name
        },
        charclass: {
            label: 'Класс',
            value: BaseCharInfoStore.charclass
        },
        race: {
            label: 'Раса',
            value: BaseCharInfoStore.race
        },
        history: {
            label: 'История',
            value: BaseCharInfoStore.history
        },
        worldview: {
            label: 'Мировозрение',
            value: BaseCharInfoStore.worldview
        },
        level: {
            label: 'Уровень',
            value: BaseCharInfoStore.level
        },
        experience: {
            label: 'Опыт',
            value: BaseCharInfoStore.experience
        }
    };

    const characteristicInfo = {
        str: {
            label: 'Сила',
            value: CharacteristicStore.str
        },
        dex: {
            label: 'Ловкость',
            value: CharacteristicStore.dex
        },
        con: {
            label: 'Телосложение',
            value: CharacteristicStore.con
        },
        int: {
            label: 'Интеллект',
            value: CharacteristicStore.int
        },
        wis: {
            label: 'Мудрость',
            value: CharacteristicStore.wis
        },
        chr: {
            label: 'Харизма',
            value: CharacteristicStore.chr
        }
    };

    const [fieldValues, setFieldValues] = useState({ ...fieldInfo, ...characteristicInfo });

    const handleInputChange = (field, value) => {
        setFieldValues(prevValues => ({

            ...prevValues,
            [field]: {
                ...prevValues[field],
                value
            }
        }));
    };

    const handleSubmit = async () => {
        try {
            const updatedFields = {
                id: BaseCharInfoStore.id,
                ...Object.fromEntries(
                    Object.entries(fieldValues).map(([field, { value }]) => [field, value])
                ),
            };

            console.log(updatedFields)

            await axios.post('http://127.0.0.1:8000/characters/update', updatedFields, {
                headers: {
                    'Authorization': `Bearer ${LogininStore.token}`,
                },
            });

            AlertStore.AddSuccessAlert('Данные успешно сохранены');
            CharChangerModal.close();

        } catch (error) {
            AlertStore.AddErrorAlert('Ошибка сохранения');
        }
    };

    const Body = (
        <div className={styles.BodyConteiner}>
            <div className={styles.BaseInfoConteiner}>
                {Object.entries(fieldInfo).map(([field, { label, value }]) => (
                    <div key={field}>
                        <Input
                            span={label}
                            defaultValue={value}
                            onchange={(e) => handleInputChange(field, e.target.value)}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.CharacteristicConteiner}>
                {Object.entries(characteristicInfo).map(([field, { label, value }]) => (
                    <div key={field}>
                        <Input
                            span={label}
                            defaultValue={value}
                            onchange={(e) => handleInputChange(field, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </div>

    );

    const Footer = (
        <div>
            <Button name="Сохранить" onclick={handleSubmit} />
        </div>
    );

    return (
        <Modal
            onclick={CharChangerModal.close}
            title="Окно изменений"
            body={Body}
            footer={Footer}
            setting="modal-xl"
        ></Modal>
    );
});

export default CharChanger;