import React from 'react';
import styles from "./Input.module.css"

function Input(props) {

    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text bg-dark text-light" id="inputGroup-sizing-default">{props.span}</span>
                <input
                    type="text"
                    className="form-control bg-dark text-light"
                    defaultValue={props.defaultValue}
                    onChange={props.onchange} />
            </div>
        </>
    );
}

export default Input

