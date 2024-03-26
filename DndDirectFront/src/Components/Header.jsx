import styles from "./Header.module.css"
import Button from '../Components/Button'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from "../Pages/HomePage";
import Armor from "../Pages/Armor";



function Header() {
    return (
        <>
            <div className={styles.Header}>
                <Link to="/"> <Button name='Главная страница' /> </Link>
                <Link to="/armor/"> <Button name='Доспехи' /> </Link>
                <Button name='Оружие' />
                <Button name='Заклинания' />
                <Button name='Персонажи' />
            </div>
            <Routes>
                <Route path="/" element={HomePage()} />
                <Route path="/armor/" element={Armor()} />
            </Routes>
        </>
    );
}

export default Header