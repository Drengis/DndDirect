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
        });
    }


    setBaseInfo = action((id, name, charclass, race, history, worldview, level, experience, armorclass, initiative, speed,) => {
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
    });

}

export default new BaseInfoStore