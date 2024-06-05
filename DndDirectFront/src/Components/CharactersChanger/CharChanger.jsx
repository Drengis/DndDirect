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

    const [fieldValues, setFieldValues] = useState(fieldInfo);

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

            await axios.post('http://127.0.0.1:8000/characters/update', updatedFields, {
                headers: {
                    'Authorization': `Bearer ${LogininStore.token}`,
                },
            });

            console.log('Данные успешно сохранены');
            CharChangerModal.close();

        } catch (error) {
            console.error('Ошибка при сохранении данных:', error);
        }
    };

    const Body = (
        <div>
            {Object.entries(fieldValues).map(([field, { label, value }]) => (
                <div key={field}>
                    <Input
                        span={label}
                        defaultValue={value}
                        onchange={(e) => handleInputChange(field, e.target.value)}
                    />
                </div>
            ))}
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