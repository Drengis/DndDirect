import { makeAutoObservable, observable, action } from 'mobx';


class BaseInfoStore {
    name = ''
    charclass = ''
    race = ''
    history = ''
    worldview = ''
    level = ''
    experience = ''

    constructor() {
        makeAutoObservable(this, {
            name: observable,
            charclass: observable,
            race: observable,
            history: observable,
            worldview: observable,
            level: observable,
            experience: observable,
        });
    }

    setName = action((name) => {
        this.name = name;
    });

    setClass = action((charclass) => {
        this.charclass = charclass;
    });

    setRace = action((race) => {
        this.race = race;
    });

    setHistory = action((history) => {
        this.history = history;
    });

    setWorldview = action((worldview) => {
        this.worldview = worldview;
    });

    setLevel = action((level) => {
        this.level = level;
    });

    setExperience = action((experience) => {
        this.experience = experience;
    });

    setBaseInfo = action((name, charclass, race, history, worldview, level, experience) => {
        this.name = name;
        this.charclass = charclass;
        this.race = race;
        this.history = history;
        this.worldview = worldview;
        this.level = level;
        this.experience = experience;
    });

}

export default new BaseInfoStore