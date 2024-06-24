import { observer } from 'mobx-react-lite';
import styles from './CharacterPoss.module.css'
import Header from '../../Components/MainComponents/Header';
import CharSideBar from '../../Components/MainComponents/CharSideBar'
import Radio3 from '../../Components/CharComp/Radio3';
import BaseCharInfoStore from '../../cms/BaseCharInfoStore';
import CharacteristicStore from '../../cms/CharacteristicStore';


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
                        <div className={styles.TitlesConteiner}>
                            <h4 className={styles.MainTitle}> Спасброски </h4>
                            <h4 className={styles.Title}> Нет </h4>
                            <h4 className={styles.Title}> Владение </h4>
                            <h4 className={styles.Title}> Компетентность </h4>
                        </div>
                        <div className={styles.Buttons}>
                            <Radio3 title="Сила" name='savestr' initialValue={CharacteristicStore.savestr} />
                            <Radio3 title="Ловкость" name='savedex' initialValue={CharacteristicStore.savedex} />
                            <Radio3 title="Телосложение" name='savecon' initialValue={CharacteristicStore.savecon} />
                            <Radio3 title="Интеллект" name='saveint' initialValue={CharacteristicStore.saveint} />
                            <Radio3 title="Мудрость" name='savewis' initialValue={CharacteristicStore.savewis} />
                            <Radio3 title="Харизма" name='savechr' initialValue={CharacteristicStore.savechr} />
                        </div>
                    </div>
                    <div className={styles.SkillsConteiner}>
                        <div className={styles.TitlesConteiner}>
                            <h4 className={styles.MainTitle}> Навыки </h4>
                            <h4 className={styles.Title}> Нет </h4>
                            <h4 className={styles.Title}> Владение </h4>
                            <h4 className={styles.Title}> Компетентность </h4>
                        </div>
                        <div className={styles.Buttons}>
                            <Radio3 title="Акробатика" name='acrobatics' initialValue={CharacteristicStore.acrobatics} />
                            <Radio3 title="Анализ" name='analysis' initialValue={CharacteristicStore.analysis} />
                            <Radio3 title="Атлетика" name='athletics' initialValue={CharacteristicStore.athletics} />
                            <Radio3 title="Восприятие" name='perception' initialValue={CharacteristicStore.perception} />
                            <Radio3 title="Выживание" name='survival' initialValue={CharacteristicStore.survival} />
                            <Radio3 title="Выступление" name='performance' initialValue={CharacteristicStore.performance} />
                            <Radio3 title="Запугивание" name='intimidation' initialValue={CharacteristicStore.intimidation} />
                            <Radio3 title="История" name='history' initialValue={CharacteristicStore.history} />
                            <Radio3 title="Ловкость&nbsp;рук" name="hand" initialValue={CharacteristicStore.hand} />
                            <Radio3 title="Магия" name='magic' initialValue={CharacteristicStore.magic} />
                            <Radio3 title="Медицина" name='medicine' initialValue={CharacteristicStore.medicine} />
                            <Radio3 title="Обман" name='deception' initialValue={CharacteristicStore.deception} />
                            <Radio3 title="Природа" name='nature' initialValue={CharacteristicStore.nature} />
                            <Radio3 title="Проницательность" name='insight' initialValue={CharacteristicStore.insight} />
                            <Radio3 title="Религия" name='religion' initialValue={CharacteristicStore.religion} />
                            <Radio3 title="Скрытность" name='stealth' initialValue={CharacteristicStore.stealth} />
                            <Radio3 title="Убеждение" name='persuasion' initialValue={CharacteristicStore.persuasion} />
                            <Radio3 title="Уход за животными" name='animals' initialValue={CharacteristicStore.animals} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

})

export default CharacterPoss