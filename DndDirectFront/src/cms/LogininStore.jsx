import { makeAutoObservable, observable, action } from 'mobx';

class LogininStore {
    token = ''
    username = ''
    password = ''
    email = ''
    id = ''
    isAuth = false

    constructor() {
        makeAutoObservable(this, {
            token: observable,
            username: observable,
            password: observable,
            email: observable,
            id: observable,
            isAuth: observable,
        });
    }

    setToken = action((token) => {
        this.token = token;
    });

    setUsername = action((username) => {
        this.username = username;
    });

    setPassword = action((password) => {
        this.password = password;
    });

    setEmail = action((email) => {
        this.email = email;
    });

    setID = action((id) => {
        this.id = id;
    });

    setIsAuth = action((isAuth) => {
        this.isAuth = isAuth;
    });

    singOut = action(() => {
        this.token = '';
        this.username = '';
        this.password = '';
        this.email = '';
        this.id = '';
        this.isAuth = false
    })
}

export default new LogininStore();