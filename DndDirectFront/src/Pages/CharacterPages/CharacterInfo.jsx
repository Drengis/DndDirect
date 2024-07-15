import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './CharacterInfo.module.css'
import Header from '../../Components/MainComponents/Header';
import CharSideBar from '../../Components/MainComponents/CharSideBar'
import LogininStore from '../../cms/LogininStore'
import Characteristic from '../../Components/CharComp/Characteristic'
import Button from '../../Components/MainComponents/Button';
import charQuery from '../../requests/Char.api'
import BaseCharInfoStore from '../../cms/BaseCharInfoStore';
import CharacteristicStore from '../../cms/CharacteristicStore';
import CharChangerModal from '../../cms/CharChangerStore';
import CharChanger from '../../Components/CharactersChanger/CharChanger';
import SkillBar from '../../Components/CharComp/SkillBar';
import HPBar from '../../Components/CharComp/HPBar';

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
                                    <div className={styles.Characteristics}>
                                        <Characteristic head="Сила" number={CharacteristicStore.str} />
                                        <Characteristic head="Ловкость" number={CharacteristicStore.dex} />
                                        <Characteristic head="Телосложение" number={CharacteristicStore.con} />
                                        <Characteristic head="Интеллект" number={CharacteristicStore.int} />
                                        <Characteristic head="Мудрость" number={CharacteristicStore.wis} />
                                        <Characteristic head="Харизма" number={CharacteristicStore.chr} />
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
                                        <div className={styles.SkillsConteiner}>
                                            <div className={styles.SaveSkills}>
                                                <label className={styles.SaveSkillsTitle}> Спасброски </label>
                                                <SkillBar name='Сила' value={CharacteristicStore.str} skillpoint={CharacteristicStore.savestr} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Ловкость' value={CharacteristicStore.dex} skillpoint={CharacteristicStore.savedex} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Телосложение' value={CharacteristicStore.con} skillpoint={CharacteristicStore.savecon} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Интеллект' value={CharacteristicStore.int} skillpoint={CharacteristicStore.saveint} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Мудрость' value={CharacteristicStore.wis} skillpoint={CharacteristicStore.savewis} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Харизма' value={CharacteristicStore.chr} skillpoint={CharacteristicStore.savechr} posValue={CharacteristicStore.possessionValue} />
                                            </div>
                                            <div className={styles.SkillsRoll}>
                                                <label className={styles.SkillsRollTitle}> Броски навыков </label>
                                                <SkillBar name='Акробатика' value={CharacteristicStore.dex} skillpoint={CharacteristicStore.acrobatics} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Анализ' value={CharacteristicStore.int} skillpoint={CharacteristicStore.analysis} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Атлетика' value={CharacteristicStore.str} skillpoint={CharacteristicStore.athletics} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Восприятие' value={CharacteristicStore.wis} skillpoint={CharacteristicStore.perception} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Выживание' value={CharacteristicStore.wis} skillpoint={CharacteristicStore.survival} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Выступление' value={CharacteristicStore.chr} skillpoint={CharacteristicStore.performance} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Запугивание' value={CharacteristicStore.chr} skillpoint={CharacteristicStore.intimidation} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='История' value={CharacteristicStore.int} skillpoint={CharacteristicStore.history} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Ловкость рук' value={CharacteristicStore.dex} skillpoint={CharacteristicStore.hand} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Магия' value={CharacteristicStore.int} skillpoint={CharacteristicStore.magic} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Медицина' value={CharacteristicStore.wis} skillpoint={CharacteristicStore.medicine} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Обман' value={CharacteristicStore.chr} skillpoint={CharacteristicStore.deception} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Природа' value={CharacteristicStore.int} skillpoint={CharacteristicStore.nature} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Проницательность' value={CharacteristicStore.wis} skillpoint={CharacteristicStore.insight} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Религия' value={CharacteristicStore.int} skillpoint={CharacteristicStore.religion} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Скрытность' value={CharacteristicStore.dex} skillpoint={CharacteristicStore.stealth} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Убеждение' value={CharacteristicStore.chr} skillpoint={CharacteristicStore.persuasion} posValue={CharacteristicStore.possessionValue} />
                                                <SkillBar name='Уход за животными' value={CharacteristicStore.wis} skillpoint={CharacteristicStore.animals} posValue={CharacteristicStore.possessionValue} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.Middle}>
                                    <div className={styles.ArmorsInitSpeed}>
                                        <div className={styles.ArmorClass}>
                                            <label className={styles.StatsTitle}>КД</label>
                                            <label className={styles.StatsValue}>{BaseCharInfoStore.armorclass}</label>
                                        </div>
                                        <div className={styles.Initiative}>
                                            <label className={styles.StatsTitle}>Инициатива</label>
                                            <label className={styles.StatsValue}>
                                                +{BaseCharInfoStore.initiative + Math.ceil((CharacteristicStore.dex - 10) / 2)}
                                            </label>
                                        </div>
                                        <div className={styles.Speed}>
                                            <label className={styles.StatsTitle}>Скорость</label>
                                            <label className={styles.StatsValue}>{BaseCharInfoStore.speed} фт.</label>
                                        </div>
                                    </div>
                                    <div className={styles.HPConteiner}>
                                        <div className={styles.MaxHP}>
                                            <label className={styles.StatsTitle}>Макс. HP</label>
                                            <label className={styles.StatsValue}>{BaseCharInfoStore.maxhp}</label>
                                        </div>
                                        <div className={styles.TempHP}>
                                            <label className={styles.StatsTitle}>Врем. HP</label>
                                            <HPBar value={BaseCharInfoStore.temphp} type='temphp' />
                                        </div>
                                        <div className={styles.NowHP}>
                                            <label className={styles.StatsTitle}>Текущ. HP</label>
                                            <HPBar value={BaseCharInfoStore.nowhp} type='nowhp' />
                                        </div>
                                    </div>
                                    <div className={styles.InventoryCoins}>
                                        <div className={styles.Inventory}>
                                            Инвентарь
                                        </div>
                                        <div className={styles.CoinsConteiner}>
                                            Монеты
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.Right}>
                                    <div className={styles.Weapons}>
                                        Оружие
                                    </div>
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