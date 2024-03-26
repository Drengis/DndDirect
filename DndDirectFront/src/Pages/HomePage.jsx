import React from 'react'
import styles from './HomePage.module.css'
import Header from '../Components/Header';


function HomePage() {
    return (
        <>
            <Header />
            <div className='Title'>
                <h1 > Главная страница </h1>
            </div>
        </>
    );
}

export default HomePage
