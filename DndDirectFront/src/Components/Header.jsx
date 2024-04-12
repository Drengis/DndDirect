import styles from "./Header.module.css"
import Button from '../Components/Button'
import { Link } from 'react-router-dom'
import Registration from "../Pages/CharacterPages/Registration";

function Header() {

    return (
        <>
            <div className={styles.Header}>
                <div className={styles.HeaderMain}>
                    <Link to="/"> <Button name='Главная страница' /> </Link>
                    <Link to="/armors/"> <Button name='Доспехи' /> </Link>
                    <Link to="/weapons/"> <Button name='Оружие' /> </Link>
                    <Link to="/spells/"> <Button name='Заклинания' /> </Link>
                    <Link to="/charecters/"> <Button name='Персонажи' /> </Link>
                </div>
                <div className={styles.HeaderLogin}>
                    <Button name='Авторизация' />
                    <Button name='Регистрация' />

                </div>
            </div>
        </>
    );
}


export default Header