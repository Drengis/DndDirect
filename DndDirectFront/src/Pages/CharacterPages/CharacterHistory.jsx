import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './CharacterHistory.module.css'
import Header from '../../Components/MainComponents/Header';
import CharSideBar from '../../Components/MainComponents/CharSideBar'
import BaseCharInfoStore from '../../cms/BaseCharInfoStore';
import LogininStore from '../../cms/LogininStore';
import { debounce } from 'lodash';
import axios from 'axios';


const CharacterHistory = observer(() => {

    const sendToServer = async (key, value) => {
        const query = {
            id: BaseCharInfoStore.id,
            [key]: value,
        };
        try {
            await axios.post('http://127.0.0.1:8000/characters/update', query, {
                headers: {
                    'Authorization': `Bearer ${LogininStore.token}`,
                },
            });
        } catch (error) {
            console.error('Ошибка при обновлении данных на сервере:', error);
        }
    };

    const debouncedSendToServer = debounce(sendToServer, 1000);

    return (
        <>
            <Header />
            <div className={styles.MainConteiner}>
                <div className={styles.SideBar}>
                    <CharSideBar />
                </div>
                <div className={styles.InfoConteiner}>
                    <div className={styles.PageTitle}>
                        <h1> Предыстория </h1>
                    </div>
                    <div className={styles.CharConteiner}>
                        <div className={styles.History}>
                            <label className={styles.Title}> История </label>
                            <textarea
                                className={`${styles.Input} form-control`}
                                id="floatingTextarea"
                                defaultValue={BaseCharInfoStore.char_history}
                                onChange={(e) => debouncedSendToServer('char_history', e.target.value)}
                            />
                        </div>
                        <div className={styles.Appearance}>
                            <label className={styles.Title}> Внешний вид </label>
                            <textarea
                                className={`${styles.Input} form-control`}
                                id="floatingTextarea"
                                defaultValue={BaseCharInfoStore.char_appearance}
                                onChange={(e) => debouncedSendToServer('char_appearance', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

})

export default CharacterHistory