import styles from "./CharSideBar.module.css"
import { Link } from 'react-router-dom'
import NotesIcon from '../Components/Icons/Notes.png'
import CharIcon from '../Components/Icons/Сhar.png'
import SpellsIcon from '../Components/Icons/Spells.png'
import AppearanceIcon from '../Components/Icons/Appearance.png'
import PossessionsIcon from '../Components/Icons/Possessions.png'
import HistoryIcon from '../Components/Icons/History.png'

function CharSideBar() {

    return (
        <>
            <div className={styles.CharSideBar}>
                <button type="button" className="btn btn-secondary" title="Персанаж">
                    <img src={CharIcon} />
                </button>
                <button type="button" className="btn btn-secondary" title="Заклинания">
                    <img src={SpellsIcon} />
                </button>
                <button type="button" className="btn btn-secondary" title="Внешний вид">
                    <img src={AppearanceIcon} />
                </button>
                <button type="button" className="btn btn-secondary" title="Владения">
                    <img src={PossessionsIcon} />
                </button>
                <button type="button" className="btn btn-secondary" title="Предыстория">
                    <img src={HistoryIcon} />
                </button>
                <button type="button" className="btn btn-secondary" title="Заметки">
                    <img src={NotesIcon} />
                </button>
            </div>
        </>
    );
}

export default CharSideBar