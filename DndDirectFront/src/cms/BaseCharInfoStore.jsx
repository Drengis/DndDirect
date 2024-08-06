import { makeAutoObservable, observable, action } from 'mobx';


class BaseInfoStore {
    id = ''
    name = ''
    charclass = ''
    race = ''
    history = ''
    worldview = ''
    level = ''
    experience = ''
    armorclass = ''
    initiative = ''
    speed = ''
    inventory = ''
    copper = ''
    silver = ''
    gold = ''
    electrum = ''
    platinum = ''
    rasepecul = ''
    classpecul = ''
    feature = ''
    char_appearance = ''
    char_history = ''
    note_names = ''
    note_cities = ''
    note_quests = ''
    note_items = ''
    note_others = ''

    constructor() {
        makeAutoObservable(this, {
            id: observable,
            name: observable,
            charclass: observable,
            race: observable,
            history: observable,
            worldview: observable,
            level: observable,
            experience: observable,
            armorclass: observable,
            initiative: observable,
            speed: observable,
            maxhp: observable,
            temphp: observable,
            nowhp: observable,
            inventory: observable,
            copper: observable,
            silver: observable,
            gold: observable,
            electrum: observable,
            platinum: observable,
            rasepecul: observable,
            classpecul: observable,
            feature: observable,
            char_appearance: observable,
            char_history: observable,
            note_names: observable,
            note_cities: observable,
            note_quests: observable,
            note_items: observable,
            note_others: observable,
        });
    }


    setBaseInfo = action((id, name, charclass, race, history, worldview, level, experience, armorclass, initiative, speed, maxhp,
        temphp, nowhp, inventory, copper, silver, gold, electrum, platinum, rasepecul, classpecul, feature, char_appearance,
        char_history, note_names, note_cities, note_quests, note_items, note_others,) => {
        this.id = id;
        this.name = name;
        this.charclass = charclass;
        this.race = race;
        this.history = history;
        this.worldview = worldview;
        this.level = level;
        this.experience = experience;
        this.armorclass = armorclass;
        this.initiative = initiative;
        this.speed = speed;
        this.maxhp = maxhp;
        this.temphp = temphp;
        this.nowhp = nowhp;
        this.inventory = inventory;
        this.copper = copper;
        this.silver = silver;
        this.gold = gold;
        this.electrum = electrum;
        this.platinum = platinum;
        this.rasepecul = rasepecul;
        this.classpecul = classpecul;
        this.feature = feature;
        this.char_appearance = char_appearance;
        this.char_history = char_history;
        this.note_names = note_names;
        this.note_cities = note_cities;
        this.note_quests = note_quests;
        this.note_items = note_items;
        this.note_others = note_others;
    });

}

export default new BaseInfoStore