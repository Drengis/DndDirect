import React, { useState, useEffect, } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './CharacterApp.module.css'
import Header from '../../Components/Header';
import CharSideBar from '../../Components/CharSideBar'
import LogininStore from '../../cms/LogininStore'


const CharacterApp = observer(() => {

    return (
        <>
            <Header />
            <div className={styles.MainConteiner}>
                <div className={styles.SideBar}>
                    <CharSideBar />
                </div>
                <div className={styles.CharConteiner}>
                    <h1> Внешний вид </h1>
                </div>
            </div>
        </>

    )

})

export default CharacterApp