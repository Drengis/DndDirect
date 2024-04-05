import styles from "./CharSideBar.module.css"
import { Link } from 'react-router-dom'
import NotesIcon from '../Components/Icons/Notes.png'
import CharIcon from '../Components/Icons/Сhar.png'
import SpellsIcon from '../Components/Icons/Spells.png'
import AppearanceIcon from '../Components/Icons/Appearance.png'
import PossessionsIcon from '../Components/Icons/Possessions.png'
import HistoryIcon from '../Components/Icons/History.png'
import CreateIcon from '../Components/Icons/Create.png'
import SaveIcon from '../Components/Icons/Save.png'
import LoadIcon from '../Components/Icons/Load.png'
import DownloadIcon from '../Components/Icons/Download.png'

function CharSideBar() {

    return (
        <>
            <div className={styles.CharSideBar}>
                <div className={styles.CharButtons}>
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
                <div className={styles.SaveLoadButtons}>
                    <button type="button" className="btn btn-secondary" title="Создать персонажа">
                        <img src={CreateIcon} />
                    </button>
                    <button type="button" className="btn btn-secondary" title="Сохранить">
                        <img src={SaveIcon} />
                    </button>
                    <button type="button" className="btn btn-secondary" title="Загрузить">
                        <img src={LoadIcon} />
                    </button>
                    <button type="button" className="btn btn-secondary" title="Скачать">
                        <img src={DownloadIcon} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default CharSideBar