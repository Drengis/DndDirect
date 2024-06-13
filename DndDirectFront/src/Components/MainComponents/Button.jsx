import React from 'react';
import styles from "./Button.module.css"

function Button(props) {

    return (
        <>
            <button type="button" className="btn btn-secondary" onClick={props.onclick}> {props.name} </button>
        </>
    );
}

export default Button