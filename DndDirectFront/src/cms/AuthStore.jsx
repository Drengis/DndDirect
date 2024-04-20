import { makeAutoObservable, observable, action } from 'mobx';

class AuthorizationModal {
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

export default new AuthorizationModal