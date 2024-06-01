import { makeAutoObservable, observable, action } from 'mobx';

class CharecteristicStore {
    str = ''
    dex = ''
    con = ''
    int = ''
    wis = ''
    chr = ''
    possessionValue = ''

    constructor() {
        makeAutoObservable(this, {
            str: observable,
            dex: observable,
            con: observable,
            int: observable,
            wis: observable,
            chr: observable,
            possessionValue: observable,
        });
    }

    setSTR = action((str) => {
        this.str = str;
    });

    setDEX = action((dex) => {
        this.dex = dex;
    });

    setCON = action((con) => {
        this.con = con;
    });

    setINT = action((int) => {
        this.int = int;
    });

    setWIS = action((wis) => {
        this.wis = wis;
    });

    setCHR = action((chr) => {
        this.chr = chr;
    });

    setPossessionValue = action((possessionValue) => {
        this.possessionValue = possessionValue;
    });

    setCharecteristic = action((str, dex, con, int, wis, chr, possessionValue) => {
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.chr = chr;
        this.possessionValue = possessionValue;
    });

}

export default new CharecteristicStore