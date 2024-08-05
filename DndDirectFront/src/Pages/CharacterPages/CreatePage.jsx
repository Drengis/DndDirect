import React, { useState, useEffect, } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './CharacterCreatePage.module.css'
import Header from '../../Components/MainComponents/Header';
import CharSideBar from '../../Components/MainComponents/CharSideBar'
import LogininStore from '../../cms/LogininStore'


const CreatePage = observer(() => {

    return (
        <>
            <Header />
            <div className={styles.MainConteiner}>
                <div className={styles.SideBar}>
                    <CharSideBar />
                </div>
                <div className={styles.CharConteiner}>
                    <h1> Создание персонажа </h1>
                </div>
            </div>
        </>

    )

})

export default CreatePage