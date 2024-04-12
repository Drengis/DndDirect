import React, { useState, useEffect } from 'react';
import styles from './Spells.module.css';
import Header from '../Components/Header';
import SpellButton from '../Components/SpellButton';

function Spells() {
    const [spellsData, setSpellsData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [selectedSpell, setSelectedSpell] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/spells/get')
            .then((response) => response.json())
            .then((data) => setSpellsData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSpellClick = (id) => {
        // Находим заклинание по его id
        const spell = spellsData.find((spell) => spell.id === id);
        setSelectedSpell(spell);
    };

    const filteredSpells = spellsData.filter((spell) =>
        spell.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <Header />
            <div className={styles.Content}>
                <div className={styles.SpellsContainer}>
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
                            <SpellButton
                                key={spell.id}
                                id={spell.id}
                                name={spell.name}
                                onClick={handleSpellClick}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.SpellInfo}>
                    {selectedSpell && (
                        <div>
                            <div className={styles.selectedSpellTitle}>
                                <h2>{selectedSpell.name}</h2>
                            </div>
                            <div className={styles.selectedSpellInfo}>
                                <div className={styles.selectedSpellInfo1}>
                                    <p>Школа: {selectedSpell.school}</p>
                                    <p>Уровень: {selectedSpell.level}</p>
                                    <p>Дистанция: {selectedSpell.range}</p>
                                    <p>Длительность: {selectedSpell.duration}</p>
                                </div>
                                <div className={styles.selectedSpellInfo2}>
                                    <p>Время применения: {selectedSpell.castingtime}</p>
                                    <p>Ритуал: {selectedSpell.ritual === 'No' ? '-' : '+'}</p>
                                    <p>Компаненты: {selectedSpell.components}</p>
                                    <p>Материалы: {selectedSpell.materials.replace(/^\(|\)$/g, '')}</p>
                                </div>
                            </div>
                            <div className={styles.SpellDiscription}>
                                {selectedSpell.text}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Spells;