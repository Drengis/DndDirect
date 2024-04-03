import React from 'react';
import styles from "./SpellButton.module.css";

function SpellButton(props) {
    return (
        <>
            <button type="button" className={`${styles.btn} btn btn-secondary`}>{props.name}</button>
        </>
    );
}

export default SpellButton;