import styles from "./CharSideBar.module.css"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
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