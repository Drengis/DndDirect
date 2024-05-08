import React, { useState, useEffect } from 'react';
import styles from './Characters.module.css';
import Header from '../../Components/Header';
import CharSideBar from '../../Components/CharSideBar';
import Button from '../../Components/Button';
import CreateIcon from '../../Components/Icons/Create.png';
import SaveIcon from '../../Components/Icons/Save.png';
import LoadIcon from '../../Components/Icons/Load.png';
import DownloadIcon from '../../Components/Icons/Download.png';
import LogininStore from '../../cms/LogininStore';


function Characters() {
    const [CharactersData, setCharactersData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8000/characters/get', {
                    headers: {
                        'Authorization': `Bearer ${LogininStore.token}`
                    }
                });
                const data = await response.json();
                setCharactersData(data);
            } catch (error) {
                console.error('Ошибка при получении данных персонажей:', error);
                setErrorMessage('Произошла ошибка при загрузке данных');
            }
        }

        if (LogininStore.isAuth) {
            fetchData();
        } else {
            setErrorMessage('Вы не авторизованы');
        }
    }, []);

    return (
        <>
            <Header />
            <div className={styles.MainConteiner}>
                <div className={styles.SaveLoadSideBar}>
                    <button type="button" className={`${styles.SLButton} btn btn-secondary`} title="Создать персонажа">
                        <img src={CreateIcon} alt="Создать" />
                    </button>
                    <button type="button" className={`${styles.SLButton} btn btn-secondary`} title="Сохранить">
                        <img src={SaveIcon} alt="Сохранить" />
                    </button>
                    <button type="button" className={`${styles.SLButton} btn btn-secondary`} title="Загрузить">
                        <img src={LoadIcon} alt="Загрузить" />
                    </button>
                    <button type="button" className={`${styles.SLButton} btn btn-secondary`} title="Скачать">
                        <img src={DownloadIcon} alt="Скачать" />
                    </button>
                </div>
                <div className={styles.CharecterConteiner}>
                    <div className={styles.CharectersTitle}>
                        <h1>Персонажи:</h1>
                    </div>
                    {errorMessage ? (
                        <div><h1>{errorMessage}</h1></div>
                    ) : (
                        <div className={styles.CharectersList}>
                            {CharactersData.map(character => (
                                <div className={styles.Charecter} key={character.id}>
                                    <h2>{character.name}</h2>
                                    <p>Класс: {character.сharclass}</p>
                                    <p>Раса: {character.race}</p>
                                    <p>Ур: {character.level}</p>
                                    <Button name='Перейти' />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Characters;