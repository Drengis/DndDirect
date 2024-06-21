import { observer } from 'mobx-react-lite';
import styles from './CharacterPoss.module.css'
import Header from '../../Components/MainComponents/Header';
import CharSideBar from '../../Components/MainComponents/CharSideBar'
import Radio3 from '../../Components/CharComp/Radio3';


const CharacterPoss = observer(() => {

    return (
        <>
            <Header />
            <div className={styles.MainConteiner}>
                <div className={styles.SideBar}>
                    <CharSideBar />
                </div>
                <div className={styles.CharConteiner}>
                    <h1> Владения </h1>
                    <div className={styles.SaveSkillConteiner}>
                        <Radio3 title="Сила" name='savestr' />
                        <Radio3 title="Ловкость" name='savedex' />
                        <Radio3 title="Телосложение" name='savecon' />
                    </div>
                </div>
            </div>
        </>

    )

})

export default CharacterPoss