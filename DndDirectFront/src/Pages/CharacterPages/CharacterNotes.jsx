import React, { useState, useEffect, } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './CharacterPoss.module.css'
import Header from '../../Components/Header';
import CharSideBar from '../../Components/CharSideBar'
import LogininStore from '../../cms/LogininStore'


const CharacterNotes = observer(() => {

    return (
        <>
            <Header />
            <div className={styles.MainConteiner}>
                <div className={styles.SideBar}>
                    <CharSideBar />
                </div>
                <div className={styles.CharConteiner}>
                    <h1> Заметки </h1>
                </div>
            </div>
        </>

    )

})

export default CharacterNotes