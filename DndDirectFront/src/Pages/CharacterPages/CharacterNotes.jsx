import React, { useState, useEffect, } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './CharacterNotes.module.css'
import Header from '../../Components/MainComponents/Header';
import CharSideBar from '../../Components/MainComponents/CharSideBar'
import LogininStore from '../../cms/LogininStore'


const CharacterNotes = observer(() => {

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

                    </div>
                </div>
            </div>
        </>

    )

})

export default CharacterNotes