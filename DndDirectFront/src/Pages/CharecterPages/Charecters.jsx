import React from 'react'
import styles from './Charecters.module.css'
import Header from '../../Components/Header';
import CharSideBar from '../../Components/CharSideBar';

function Charecters() {
    return (
        <>
            <Header />
            <div className={styles.CharectersTitle}>
                <h1> Персонажи: </h1>
            </div>
        </>
    );
}

export default Charecters
