import styles from "./Header.module.css"
import Button from '../Components/Button'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from "../Pages/HomePage";
import Armors from "../Pages/Armors";
import Weapons from "../Pages/Weapons";
import Spells from "../Pages/Spells";
import Charecters from "../Pages/Charecters";

function Header() {
    return (
        <>
            <div className={styles.Header}>
                <Link to="/"> <Button name='Главная страница' /> </Link>
                <Link to="/armors/"> <Button name='Доспехи' /> </Link>
                <Link to="/weapons/"> <Button name='Оружие' /> </Link>
                <Link to="/spells/"> <Button name='Заклинания' /> </Link>
                <Link to="/charecters/"> <Button name='Персонажи' /> </Link>
            </div>
            <Routes>
                <Route path="/" element={HomePage()} />
                <Route path="/armors/" element={Armors()} />
                <Route path="/weapons/" element={Weapons()} />
                <Route path="/spells/" element={Spells()} />
                <Route path="/charecters/" element={Charecters()} />
            </Routes>
        </>
    );
}

export default Header