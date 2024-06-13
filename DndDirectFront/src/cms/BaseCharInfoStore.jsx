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
        });
    }


    setBaseInfo = action((id, name, charclass, race, history, worldview, level, experience) => {
        this.id = id;
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