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
        });
    }

    setCharecteristic = action((str, dex, con, int, wis, chr, possessionValue, savestr,
        savedex, savecon, saveint, savewis, savechr,) => {
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
    });

}

export default new CharecteristicStore