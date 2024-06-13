import styles from "./CharSideBar.module.css"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import NotesIcon from '../Icons/Notes.png'
import CharIcon from '../Icons/Сhar.png'
import SpellsIcon from '../Icons/Spells.png'
import AppearanceIcon from '../Icons/Appearance.png'
import PossessionsIcon from '../Icons/Possessions.png'
import HistoryIcon from '../Icons/History.png'
import CreateIcon from '../Icons/Create.png'
import SaveIcon from '../Icons/Save.png'
import LoadIcon from '../Icons/Load.png'
import DownloadIcon from '../Icons/Download.png'


function CharSideBar() {
    const { id } = useParams();

    return (
        <>
            <div className={styles.CharSideBar}>
                <div className={styles.CharButtons}>
                    <Link to={`/character/info/${id}/`} className={`${styles.link} btn btn-secondary`} title="Персанаж">
                        <img src={CharIcon} />
                    </Link>
                    <Link to={`/character/spells/${id}/`} className={`${styles.link} btn btn-secondary`} title="Заклинания">
                        <img src={SpellsIcon} />
                    </Link>
                    <Link to={`/character/app/${id}/`} className={`${styles.link} btn btn-secondary`} title="Внешний вид">
                        <img src={AppearanceIcon} />
                    </Link>
                    <Link to={`/character/poss/${id}/`} className={`${styles.link} btn btn-secondary`} title="Владения">
                        <img src={PossessionsIcon} />
                    </Link>
                    <Link to={`/character/history/${id}/`} className={`${styles.link} btn btn-secondary`} title="Предыстория">
                        <img src={HistoryIcon} />
                    </Link>
                    <Link to={`/character/notes/${id}/`} className={`${styles.link} btn btn-secondary`} title="Заметки">
                        <img src={NotesIcon} />
                    </Link>
                </div>
                <div className={styles.SaveLoadButtons}>
                    <Link to={`/character/create/`} className={`${styles.link} btn btn-secondary`} title="Создать персонажа">
                        <img src={CreateIcon} />
                    </Link>
                    <Link className={`${styles.link} btn btn-secondary`} title="Сохранить">
                        <img src={SaveIcon} />
                    </Link>
                    <Link className={`${styles.link} btn btn-secondary`} title="Загрузить">
                        <img src={LoadIcon} />
                    </Link>
                    <Link className={`${styles.link} btn btn-secondary`} title="Скачать">
                        <img src={DownloadIcon} />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CharSideBar