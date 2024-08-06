import React, { useState, useEffect, } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './CharacterNotes.module.css'
import Header from '../../Components/MainComponents/Header';
import CharSideBar from '../../Components/MainComponents/CharSideBar'
import LogininStore from '../../cms/LogininStore'
import BaseCharInfoStore from '../../cms/BaseCharInfoStore';
import axios from 'axios';
import { debounce } from 'lodash';


const CharacterNotes = observer(() => {

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
                        <h1> Заметки </h1>
                    </div>
                    <div className={styles.CharConteiner}>
                        <div className={styles.Note}>
                            <label className={styles.Title}> Имена </label>
                            <textarea
                                className={`${styles.Input} form-control`}
                                id="floatingTextarea"
                                defaultValue={BaseCharInfoStore.note_names}
                                onChange={(e) => debouncedSendToServer('note_names', e.target.value)}
                            />
                        </div>
                        <div className={styles.Note}>
                            <label className={styles.Title}> Города и Страны </label>
                            <textarea
                                className={`${styles.Input} form-control`}
                                id="floatingTextarea"
                                defaultValue={BaseCharInfoStore.note_cities}
                                onChange={(e) => debouncedSendToServer('note_cities', e.target.value)}

                            />
                        </div>
                        <div className={styles.Note}>
                            <label className={styles.Title}> Предметы </label>
                            <textarea
                                className={`${styles.Input} form-control`}
                                id="floatingTextarea"
                                defaultValue={BaseCharInfoStore.note_items}
                                onChange={(e) => debouncedSendToServer('note_items', e.target.value)}

                            />
                        </div>
                        <div className={styles.Note}>
                            <label className={styles.Title}> Задачи </label>
                            <textarea
                                className={`${styles.Input} form-control`}
                                id="floatingTextarea"
                                defaultValue={BaseCharInfoStore.note_quests}
                                onChange={(e) => debouncedSendToServer('note_quests', e.target.value)}

                            />
                        </div><div className={styles.Note}>
                            <label className={styles.Title}> Прочие </label>
                            <textarea
                                className={`${styles.Input} form-control`}
                                id="floatingTextarea"
                                defaultValue={BaseCharInfoStore.note_others}
                                onChange={(e) => debouncedSendToServer('note_others', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

})

export default CharacterNotes