import { makeAutoObservable, observable, action } from 'mobx';

// class CharWeaponsStore {
//     name1 = ''
//     name2 = ''
//     name3 = ''
//     name4 = ''
//     modif1 = ''
//     modif2 = ''
//     modif3 = ''
//     modif4 = ''
//     damage1 = ''
//     damage2 = ''
//     damage3 = ''
//     damage4 = ''


//     constructor() {
//         makeAutoObservable(this, {
//             name1: observable,
//             name2: observable,
//             name3: observable,
//             name4: observable,
//             modif1: observable,
//             modif2: observable,
//             modif3: observable,
//             modif4: observable,
//             damage1: observable,
//             damage2: observable,
//             damage3: observable,
//             damage4: observable,

//         });
//     }

//     setWeapon1 = action((name1, modif1, damage1) => {
//         this.name1 = name1;
//         this.modif1 = modif1;
//         this.damage1 = damage1;
//     });
//     setWeapon2 = action((name2, modif2, damage2) => {
//         this.name2 = name2;
//         this.modif2 = modif2;
//         this.damage2 = damage2;
//     });
//     setWeapon3 = action((name3, modif3, damage3) => {
//         this.name3 = name3;
//         this.modif3 = modif3;
//         this.damage3 = damage3;
//     });
//     setWeapon4 = action((name4, modif4, damage4) => {
//         this.name4 = name4;
//         this.modif4 = modif4;
//         this.damage4 = damage4;
//     });

//     setAllWeapons = action((name1, modif1, damage1, name2, modif2, damage2, name3, modif3, damage3, name4, modif4, damage4) => {
//         this.name1 = name1;
//         this.modif1 = modif1;
//         this.damage1 = damage1;
//         this.name2 = name2;
//         this.modif2 = modif2;
//         this.damage2 = damage2;
//         this.name3 = name3;
//         this.modif3 = modif3;
//         this.damage3 = damage3;
//         this.name4 = name4;
//         this.modif4 = modif4;
//         this.damage4 = damage4;
//     });


// }

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