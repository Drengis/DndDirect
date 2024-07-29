import { makeAutoObservable, observable, action } from 'mobx';


class CharWeaponsStore {
    weapons = [];

    constructor() {
        makeAutoObservable(this, {
            weapons: observable
        });
    }

    deleteWeapons = action(() => {
        this.weapons = [];
    });

    addWeapon = action((weapon) => {
        this.weapons.push(weapon);
    });

}


export default new CharWeaponsStore();