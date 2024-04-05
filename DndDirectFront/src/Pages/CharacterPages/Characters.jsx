import React, { useState, useEffect } from 'react'
import styles from './Characters.module.css'
import Header from '../../Components/Header';
import CharSideBar from '../../Components/CharSideBar';
import Button from '../../Components/Button';
import CreateIcon from '../../Components/Icons/Create.png'
import SaveIcon from '../../Components/Icons/Save.png'
import LoadIcon from '../../Components/Icons/Load.png'
import DownloadIcon from '../../Components/Icons/Download.png'

function Charecters() {
    const [CharactersData, setCharactersData] = useState([]);

    useEffect(() => {
        // Загрузка данных из JSON файла
        fetch('http://127.0.0.1:8000/characters/get')
            .then(response => response.json())
            .then(data => setCharactersData(data))
            .catch(error => console.error('Error fetching weapon data:', error));
    }, []);

    return (
        <>
            <Header />
            <div className={styles.MainConteiner}>
                <div className={styles.SaveLoadSideBar}>
                    <button type="button" className={`${styles.SLButton} btn btn-secondary`} title="Создать персонажа">
                        <img src={CreateIcon} />
                    </button>
                    <button type="button" className={`${styles.SLButton} btn btn-secondary`} title="Сохранить">
                        <img src={SaveIcon} />
                    </button>
                    <button type="button" className={`${styles.SLButton} btn btn-secondary`} title="Загрузить">
                        <img src={LoadIcon} />
                    </button>
                    <button type="button" className={`${styles.SLButton} btn btn-secondary`} title="Скачать">
                        <img src={DownloadIcon} />
                    </button>
                </div>
                <div className={styles.CharecterConteiner}>
                    <div className={styles.CharectersTitle}>
                        <h1> Персонажи: </h1>
                    </div>
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
                </div>
            </div>
        </>
    );
}

export default Charecters
