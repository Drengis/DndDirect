import { action, makeAutoObservable, observable } from 'mobx';

class AlertStore {
    Alerts = [];

    constructor() {
        makeAutoObservable(this, {
            Alerts: observable
        })
    }

    AddSuccessAlert = action((message) => {
        const alert = (
            <div className="alert alert-success" key={Date.now()}>
                <div>{message}</div>
                <button className="btn-close close-button" onClick={() => this.RemoveAlert(message)}></button>
            </div>
        )
        this.Alerts.push(alert)

        const timer = setTimeout(() => {
            this.RemoveAlert(message);
        }, 5000);

        return () => clearTimeout(timer);
    });


    AddInfoAlert = action((message) => {
        const alert = (
            <div className="alert alert-info" key={Date.now()}>
                <div>{message}</div>
                <button className="btn-close close-button" onClick={() => this.RemoveAlert(message)}></button>
            </div>
        )
        this.Alerts.push(alert)

        const timer = setTimeout(() => {
            this.RemoveAlert(message);
        }, 5000);

        return () => clearTimeout(timer);
    });

    AddWarningAlert = action((message) => {
        const alert = (
            <div className="alert alert-warning" key={Date.now()}>
                <div>{message}</div>
                <button className="btn-close close-button" onClick={() => this.RemoveAlert(message)}></button>
            </div>
        )
        this.Alerts.push(alert)

        const timer = setTimeout(() => {
            this.RemoveAlert(message);
        }, 5000);

        return () => clearTimeout(timer);
    });

    AddErrorAlert = action((message) => {
        const alert = (
            <div className="alert alert-danger" key={Date.now()}>
                <div>{message}</div>
                <button className="btn-close close-button" onClick={() => this.RemoveAlert(message)}></button>
            </div>
        )
        this.Alerts.push(alert)

        const timer = setTimeout(() => {
            this.RemoveAlert(message);
        }, 5000);

        return () => clearTimeout(timer);
    });


    RemoveAlert = action((message) => {
        this.Alerts.splice(this.Alerts.indexOf(message), 1);
    })


}

export default new AlertStore();