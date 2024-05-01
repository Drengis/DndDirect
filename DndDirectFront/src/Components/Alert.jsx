import React from 'react';
import styles from './Alert.module.css'

function Alert(props) {

    return (
        <div className="alert alert-danger" role="alert">
            {props.text}
        </div>
    );
}

export default Alert