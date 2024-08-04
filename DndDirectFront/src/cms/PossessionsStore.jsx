import { makeAutoObservable, observable, action } from 'mobx';

class PossessionsStore {
    poss_weapons = ''
    poss_armors = ''
    poss_languages = ''
    poss_music_inst = ''
    poss_craft_inst = ''
    poss_others = ''


    constructor() {
        makeAutoObservable(this, {
            dex: observable,
            poss_weapons: observable,
            poss_armors: observable,
            poss_languages: observable,
            poss_music_inst: observable,
            poss_craft_inst: observable,
            poss_others: observable,

        });
    }

    setPossessions = action((poss_weapons, poss_armors, poss_languages, poss_music_inst, poss_craft_inst, poss_others,) => {
        this.poss_weapons = poss_weapons;
        this.poss_armors = poss_armors;
        this.poss_languages = poss_languages;
        this.poss_music_inst = poss_music_inst;
        this.poss_craft_inst = poss_craft_inst;
        this.poss_others = poss_others;
    });

}

export default new PossessionsStore