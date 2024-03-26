import styles from "./Header.module.css"
import Button from '../Components/Button'

function Header() {
    return (
        <>
            <div className={styles.Header}>
                <Button name='Доспехи' />
                <Button name='Оружие' />
                <Button name='Заклинания' />
                <Button name='Персонажи' />
            </div>
        </>
    );
}

export default Header