import React, { useState, useEffect, } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './CharacterPoss.module.css'
import Header from '../../Components/MainComponents/Header';
import CharSideBar from '../../Components/MainComponents/CharSideBar'
import LogininStore from '../../cms/LogininStore'


const CharacterPoss = observer(() => {

    return (
        <>
            <Header />
            <div className={styles.MainConteiner}>
                <div className={styles.SideBar}>
                    <CharSideBar />
                </div>
                <div className={styles.CharConteiner}>
                    <h1> Владения </h1>
                </div>
            </div>
        </>

    )

})

export default CharacterPoss