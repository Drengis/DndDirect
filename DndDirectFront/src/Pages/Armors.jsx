import React, { useEffect, useState } from 'react'
import styles from './Armors.module.css'
import Header from '../Components/Header';

function Armors() {
    const [LightArmorsData, setLightArmorsData] = useState([]);

    useEffect(() => {
        // Загрузка данных из JSON файла
        fetch('http://127.0.0.1:8000/light-armors/get')
            .then(response => response.json())
            .then(data => setLightArmorsData(data))
            .catch(error => console.error('Error fetching weapon data:', error));
    }, []);

    const [MediumArmorsData, setMediumArmorsData] = useState([]);

    useEffect(() => {
        // Загрузка данных из JSON файла
        fetch('http://127.0.0.1:8000/medium-armors/get')
            .then(response => response.json())
            .then(data => setMediumArmorsData(data))
            .catch(error => console.error('Error fetching weapon data:', error));
    }, []);

    const [HeavyArmorsData, setHeavyArmorsData] = useState([]);

    useEffect(() => {
        // Загрузка данных из JSON файла
        fetch('http://127.0.0.1:8000/heavy-armors/get')
            .then(response => response.json())
            .then(data => setHeavyArmorsData(data))
            .catch(error => console.error('Error fetching weapon data:', error));
    }, []);

    return (
        <>
            <Header />
            <div className={styles.Title}>
                <h1> Легкие Доспехи </h1>
                <h1> Средние Доспехи </h1>
            </div>
            <div className={styles.Tables}>
                <table className={styles.LightArmorsTable}>
                    <thead>
                        <tr >
                            <th scope="col">Название</th>
                            <th scope="col">Цена</th>
                            <th className={styles.columnArmorClass} scope="col">Класс Брони</th>
                            <th scope="col">Небходимая сила</th>
                            <th scope="col">Скрытность</th>
                        </tr>
                    </thead>
                    <tbody>
                        {LightArmorsData.map(weapon => (
                            <tr key={weapon.id}>
                                <td>{weapon.name}</td>
                                <td>{weapon.price}</td>
                                <td className={styles.columnArmorClass}>{weapon.armorclass}</td>
                                <td>{weapon.strength}</td>
                                <td>{weapon.stealth}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Средние Доспехи */}
                <table className={styles.MediumArmorsTable}>
                    <thead>
                        <tr >
                            <th scope="col">Название</th>
                            <th scope="col">Цена</th>
                            <th className={styles.columnArmorClass} scope="col">Класс Брони</th>
                            <th scope="col">Небходимая сила</th>
                            <th scope="col">Скрытность</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MediumArmorsData.map(weapon => (
                            <tr key={weapon.id}>
                                <td>{weapon.name}</td>
                                <td>{weapon.price}</td>
                                <td className={styles.columnArmorClass}>{weapon.armorclass}</td>
                                <td>{weapon.strength}</td>
                                <td>{weapon.stealth}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.Title}>
                <h1> Тяжелые Доспехи </h1>
            </div>
            <div className={styles.HeavyArmorsTableConteiner}>
                <table className={styles.HeavyArmorsTable}>
                    <thead>
                        <tr >
                            <th scope="col">Название</th>
                            <th scope="col">Цена</th>
                            <th className={styles.columnArmorClass} scope="col">Класс Брони</th>
                            <th scope="col">Небходимая сила</th>
                            <th scope="col">Скрытность</th>
                        </tr>
                    </thead>
                    <tbody>
                        {HeavyArmorsData.map(weapon => (
                            <tr key={weapon.id}>
                                <td>{weapon.name}</td>
                                <td>{weapon.price}</td>
                                <td className={styles.columnArmorClass} >{weapon.armorclass}</td>
                                <td>{weapon.strength}</td>
                                <td>{weapon.stealth}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Armors
