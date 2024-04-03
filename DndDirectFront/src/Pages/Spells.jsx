import React, { useState, useEffect } from 'react';
import styles from './Spells.module.css';
import Header from '../Components/Header';
import SpellButton from '../Components/SpellButton';

function Spells() {
    const [SpellsData, setSpellsData] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        // Загрузка данных из JSON файла
        fetch('http://127.0.0.1:8000/spells/get')
            .then((response) => response.json())
            .then((data) => setSpellsData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const filteredSpells = SpellsData.filter((spell) =>
        spell.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <Header />
            <div className={styles.SpellsConteiner}>
                <div className={`${styles.Search} input-group flex-nowrap `}>
                    <span className={`${styles.SearchLabel} input-group-text bg-dark text-light`}>Поиск</span>
                    <input
                        type="text"
                        className={`${styles.SearchInput} form-control bg-dark text-light`}
                        aria-describedby="addon-wrapping"
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className={styles.SpellsList}>
                    {filteredSpells.sort((a, b) => a.level - b.level).map((spell) => (
                        <SpellButton key={spell.id} name={spell.name} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Spells;