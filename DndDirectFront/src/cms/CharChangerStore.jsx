import { makeAutoObservable, observable, action } from 'mobx';

class CharChangerModal {
    visible = false;

    constructor() {
        makeAutoObservable(this, {
            visible: observable,
        });
    }

    open = action(() => {
        this.visible = true;
    });

    close = action(() => {
        this.visible = false;

    });


}

export default new CharChangerModal
