import styles from "./Header.module.css"
import Button from '../Components/Button'
import { Link } from 'react-router-dom'

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
        </>
    );
}

export default Header