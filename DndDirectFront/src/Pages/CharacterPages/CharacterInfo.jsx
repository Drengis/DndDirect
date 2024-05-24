import React, { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import styles from './CharacterInfo.module.css'
import Header from '../../Components/Header';
import CharSideBar from '../../Components/CharSideBar'
import LogininStore from '../../cms/LogininStore'
import Сharacteristic from '../../Components/CharComp/Сharacteristic'
import Button from '../../Components/Button';


const CharacterInfo = observer(() => {
    const { id } = useParams();
    const [CharactersData, setCharactersData] = useState([]);
    const [UnauthMessage, setUnauthMessage] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/characters/get/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${LogininStore.token}`
                    }
                });
                const data = await response.json();
                setCharactersData(data);
            } catch (error) {
                console.error('Ошибка при получении данных персонажей:', error);
            }
        };

        if (LogininStore.isAuth === true) {
            fetchData();
        } else {
            setUnauthMessage('Вы не авторизованы');
        }
    }, [LogininStore.isAuth]);


    return (
        <>
            <Header />
            <div className={styles.MainConteiner}>
                <div className={styles.SideBar}>
                    <CharSideBar />
                </div>
                <div className={styles.CharConteiner}>
                    {LogininStore.isAuth === true ? (
                        <div className={styles.CharConteiner}>
                            <div className={styles.TopInfo}>
                                <div className={styles.CharName}>
                                    <h1> {CharactersData.name} </h1>
                                </div>
                                <div className={styles.BaseInfo}>
                                    <div className={styles.InfoConteiner}>
                                        <h2> Раса: {CharactersData.race} </h2>
                                        <h2> Класс: {CharactersData.сharclass}</h2>
                                    </div>
                                    <div className={styles.InfoConteiner}>
                                        <h2> Предыстория: {CharactersData.history}</h2>
                                        <h2> Мировозрение: {CharactersData.worldview}</h2>
                                    </div>
                                    <div className={styles.InfoConteiner}>
                                        <h2> Уровень: {CharactersData.level}</h2>
                                        <h2> Опыт: {CharactersData.experience}</h2>
                                    </div>
                                </div>
                                <div className={styles.ChangeButton}>
                                    <Button name='Изменить' />
                                </div>
                            </div>

                            <div className={styles.ButtomInfo}>
                                <div className={styles.Left}>
                                    <Сharacteristic head="Сила" number={CharactersData.str} />
                                    <Сharacteristic head="Ловкость" number={CharactersData.dex} />
                                    <Сharacteristic head="Телосложение" number={CharactersData.con} />
                                    <Сharacteristic head="Интеллект" number={CharactersData.int} />
                                    <Сharacteristic head="Мудрость" number={CharactersData.wis} />
                                    <Сharacteristic head="Харизма" number={CharactersData.chr} />
                                </div>
                                <div className={styles.Middle}>
                                    MID
                                </div>
                                <div className={styles.Right}>
                                    RIGHT
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h1> {UnauthMessage} </h1>
                        </div>
                    )}

                </div>

            </div>
        </>

    )

})

export default CharacterInfo