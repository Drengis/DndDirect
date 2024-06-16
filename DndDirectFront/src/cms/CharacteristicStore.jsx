import { makeAutoObservable, observable, action } from 'mobx';

class CharecteristicStore {
    str = ''
    dex = ''
    con = ''
    int = ''
    wis = ''
    chr = ''
    possessionValue = ''
    savestr = ''
    savedex = ''
    savecon = ''
    saveint = ''
    savewis = ''
    savechr = ''
    acrobatics
    analysis = ''
    athletics = ''
    perception = ''
    survival = ''
    performance = ''
    intimidation = ''
    history = ''
    hand = ''
    magic = ''
    medicine = ''
    deception = ''
    nature = ''
    insight = ''
    religion = ''
    stealth = ''
    persuasion = ''
    animals = ''

    constructor() {
        makeAutoObservable(this, {
            str: observable,
            dex: observable,
            con: observable,
            int: observable,
            wis: observable,
            chr: observable,
            possessionValue: observable,
            savestr: observable,
            savedex: observable,
            savecon: observable,
            saveint: observable,
            savewis: observable,
            savechr: observable,
            acrobatics: observable,
            analysis: observable,
            athletics: observable,
            perception: observable,
            survival: observable,
            performance: observable,
            intimidation: observable,
            history: observable,
            hand: observable,
            magic: observable,
            medicine: observable,
            deception: observable,
            nature: observable,
            insight: observable,
            religion: observable,
            stealth: observable,
            persuasion: observable,
            animals: observable,
        });
    }

    setCharecteristic = action((str, dex, con, int, wis, chr, possessionValue, savestr,
        savedex, savecon, saveint, savewis, savechr, acrobatics, analysis, athletics, perception, survival,
        performance, intimidation, history, hand, magic, medicine, deception, nature, insight,
        religion, stealth, persuasion, animals,) => {
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.chr = chr;
        this.possessionValue = possessionValue;
        this.savestr = savestr;
        this.savedex = savedex;
        this.savecon = savecon;
        this.saveint = saveint;
        this.savewis = savewis;
        this.savechr = savechr;
        this.acrobatics = acrobatics;
        this.analysis = analysis;
        this.athletics = athletics;
        this.perception = perception;
        this.survival = survival;
        this.performance = performance;
        this.intimidation = intimidation;
        this.history = history;
        this.hand = hand;
        this.magic = magic;
        this.medicine = medicine;
        this.deception = deception;
        this.nature = nature;
        this.insight = insight;
        this.religion = religion;
        this.stealth = stealth;
        this.persuasion = persuasion;
        this.animals = animals;
    });

}

export default new CharecteristicStore