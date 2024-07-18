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
        });
    }


    setBaseInfo = action((id, name, charclass, race, history, worldview, level, experience, armorclass, initiative, speed, maxhp,
        temphp, nowhp, inventory, copper, silver, gold, electrum, platinum) => {
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
    });

}

export default new BaseInfoStore