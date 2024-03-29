import React, { useState, useEffect } from 'react'
import styles from './Weapons.module.css'
import Header from '../Components/Header';


function Weapons() {
    const [SimpleWeaponData, setSimpleWeaponData] = useState([]);

    useEffect(() => {
        // Загрузка данных из JSON файла
        fetch('http://127.0.0.1:8000/simple-weapons/get')
            .then(response => response.json())
            .then(data => setSimpleWeaponData(data))
            .catch(error => console.error('Error fetching weapon data:', error));
    }, []);

    const [MilitaryWeaponData, setMilitaryWeaponData] = useState([]);

    useEffect(() => {
        // Загрузка данных из JSON файла
        fetch('http://127.0.0.1:8000/miilitary-weapons/get')
            .then(response => response.json())
            .then(data => setMilitaryWeaponData(data))
            .catch(error => console.error('Error fetching weapon data:', error));
    }, []);

    return (
        <>
            <Header />
            <div className={styles.Title}>
                <h1> Простое оружие </h1>
                <h1> Воинское оружие </h1>
            </div>
            <div className={styles.Tables}>
                <table className={styles.SimpleWeaponsTable}>
                    <thead>
                        <tr >
                            <th scope="col">Название</th>
                            <th scope="col">Цена</th>
                            <th scope="col">Урон</th>
                            <th scope="col">Свойства</th>
                        </tr>
                    </thead>
                    <tbody>
                        {SimpleWeaponData.map(weapon => (
                            <tr key={weapon.id}>
                                <td>{weapon.name}</td>
                                <td>{weapon.price}</td>
                                <td>{weapon.damage}</td>
                                <td>{weapon.options}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Воинское */}
                <table className={styles.MilitaryWeaponsTable}>
                    <thead>
                        <tr >
                            <th scope="col">Название</th>
                            <th scope="col">Цена</th>
                            <th scope="col">Урон</th>
                            <th scope="col">Свойства</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MilitaryWeaponData.map(weapon => (
                            <tr key={weapon.id}>
                                <td>{weapon.name}</td>
                                <td>{weapon.price}</td>
                                <td>{weapon.damage}</td>
                                <td>{weapon.options}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    );
}


export default Weapons
