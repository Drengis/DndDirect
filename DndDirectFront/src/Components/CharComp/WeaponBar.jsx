import React from 'react';
import styles from "./WeaponBar.module.css"
import axios from 'axios';
import LogininStore from '../../cms/LogininStore';
import BaseCharInfoStore from '../../cms/BaseCharInfoStore';
import weaponsQuery from '../../requests/CharWeapons.api';

function WeaponBar(props) {
    const id = props.id
    const character_id = BaseCharInfoStore.id

    const sendToServer = async (info, value) => {
        const query = {
            id: id,
            [info]: value,
        };

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/charactersweapons/update', query,
                {
                    headers: {
                        'Authorization': `Bearer ${LogininStore.token}`,
                    },
                }
            );

            if (response.status === 200) {
            } else {
                console.error('Error updating on the server:', response.status, response.statusText);
            }
        } catch (error) {
        }
    };

    const deleteWeapons = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/charactersweapons/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${LogininStore.token}`,
                },
            });
            weaponsQuery(character_id)
        } catch (error) {
            console.error('Ошибка при обновлении данных на сервере:', error);
        }
    };

    return (
        <>
            <div className={styles.Conteiner}>
                <div className={styles.NameConteiner}>
                    <input
                        type="text"
                        className={`${styles.NameInput} form-control bg-dark text-light`}
                        defaultValue={props.name}
                        onChange={(e) => sendToServer('name', e.target.value)}
                    />
                </div>
                <div className={styles.ModifConteiner}>
                    <input
                        type="text"
                        className={`${styles.ModifInput} form-control bg-dark text-light`}
                        defaultValue={props.modif}
                        onChange={(e) => sendToServer('modif', e.target.value)}
                    />
                </div>
                <div className={styles.DamageConteiner}>
                    <input
                        type="text"
                        className={`${styles.NameInput} form-control bg-dark text-light`}
                        defaultValue={props.damage}
                        onChange={(e) => sendToServer('damage', e.target.value)}
                    />
                </div>
                <div className={styles.СloseButtonConteiner}>
                    <button
                        type="button"
                        className={`${styles.СloseButton} btn-close btn-close-white`}
                        aria-label="Close"
                        onClick={() => deleteWeapons(id)}>
                    </button>
                </div>
            </div>
        </>
    );
}

export default WeaponBar