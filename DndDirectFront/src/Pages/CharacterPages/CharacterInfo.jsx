import React, { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import styles from './CharacterInfo.module.css'
import Header from '../../Components/Header';
import CharSideBar from '../../Components/CharSideBar'
import LogininStore from '../../cms/LogininStore'


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
                    <h1> {CharactersData.name} </h1>
                </div>

            </div>
        </>

    )

})

export default CharacterInfo