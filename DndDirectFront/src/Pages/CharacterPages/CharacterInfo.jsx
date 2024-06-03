import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './CharacterInfo.module.css'
import Header from '../../Components/Header';
import CharSideBar from '../../Components/CharSideBar'
import LogininStore from '../../cms/LogininStore'
import Сharacteristic from '../../Components/CharComp/Сharacteristic'
import Button from '../../Components/Button';
import charQuery from '../../requests/Char.api'
import BaseCharInfoStore from '../../cms/BaseCharInfoStore';
import CharacteristicStore from '../../cms/CharacteristicStore';
import CharChangerModal from '../../cms/CharChangerStore';
import CharChanger from '../../Components/CharactersChanger/CharChanger';

const CharacterInfo = observer(() => {
    charQuery();
    const UnauthMessage = 'Вы не авторизованы'

    return (
        <>
            <Header />
            <div className={styles.MainConteiner}>
                <div className={styles.SideBar}>
                    <CharSideBar />
                </div>
                <div className={styles.CharConteiner}>
                    {LogininStore.isAuth === true ? (
                        <div className={styles.CharConteiner}>
                            <div className={styles.TopInfo}>
                                <div className={styles.CharName}>
                                    <h1> {BaseCharInfoStore.name} </h1>
                                </div>
                                <div className={styles.BaseInfo}>
                                    <div className={styles.InfoConteiner}>
                                        <h2> Раса: {BaseCharInfoStore.race} </h2>
                                        <h2> Класс: {BaseCharInfoStore.charclass}</h2>
                                    </div>
                                    <div className={styles.InfoConteiner}>
                                        <h2> Предыстория: {BaseCharInfoStore.history}</h2>
                                        <h2> Мировозрение: {BaseCharInfoStore.worldview}</h2>
                                    </div>
                                    <div className={styles.InfoConteiner}>
                                        <h2> Уровень: {BaseCharInfoStore.level}</h2>
                                        <h2> Опыт: {BaseCharInfoStore.experience}</h2>
                                    </div>
                                </div>
                                <div className={styles.ChangeButton}>
                                    <Button name='Изменить' onclick={CharChangerModal.open} />
                                </div>
                            </div>

                            <div className={styles.ButtomInfo}>
                                <div className={styles.Left}>
                                    <div className={styles.Сharacteristics}>
                                        <Сharacteristic head="Сила" number={CharacteristicStore.str} />
                                        <Сharacteristic head="Ловкость" number={CharacteristicStore.dex} />
                                        <Сharacteristic head="Телосложение" number={CharacteristicStore.con} />
                                        <Сharacteristic head="Интеллект" number={CharacteristicStore.int} />
                                        <Сharacteristic head="Мудрость" number={CharacteristicStore.wis} />
                                        <Сharacteristic head="Харизма" number={CharacteristicStore.chr} />
                                    </div>
                                    <div className={styles.Skills}>
                                        <div className={styles.InspPossesConteiner}>
                                            <div className={styles.Inspiration}>
                                                <input className={`${styles.InspirationCheck} form-check-input`} type="checkbox" value="" id="flexCheckDefault" />
                                                <label className={styles.InspirationTitle}> Вдохновение </label>
                                            </div>
                                            <div className={styles.Possession}>
                                                <label className={styles.PossessionValue}> +{CharacteristicStore.possessionValue} </label>
                                                <label className={styles.PossessionTitle}> Навык владения </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.Middle}>
                                    MID
                                </div>
                                <div className={styles.Right}>
                                    RIGHT
                                </div>
                            </div>
                            {CharChangerModal.visible && <CharChanger />}
                        </div>

                    ) : (
                        <div>
                            <h1> {UnauthMessage} </h1>
                        </div>
                    )}

                </div>

            </div>
        </>

    )

})

export default CharacterInfo