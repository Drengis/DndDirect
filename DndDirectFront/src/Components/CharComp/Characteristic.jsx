import React from 'react';
import styles from "./Characteristic.module.css"

function Characteristic(props) {
    const modifier = Math.ceil((props.number - 10) / 2);
    const value = modifier >= 0 ? `+${modifier}` : `${modifier}`;

    return (
        <>
            <div className={styles.Conteiner}>
                <div className={styles.Head}>
                    {props.head}
                </div>
                <div className={styles.Value}>
                    <h3>{value}</h3>
                </div>
                <div className={styles.Number}>
                    <button type="button" className="btn btn-secondary" onClick={props.onclick}>{props.number}</button>
                </div>
            </div>
        </>
    );
}

export default Characteristic