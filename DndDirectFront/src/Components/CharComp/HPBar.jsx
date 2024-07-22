import React, { useState, useEffect } from 'react';
import styles from "./HPBar.module.css";
import axios from 'axios';
import LogininStore from '../../cms/LogininStore';
import BaseCharInfoStore from "../../cms/BaseCharInfoStore";

function HPBar(props) {
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    const handleDecrement = (amount) => {
        setValue(value - amount);
        sendToServer(value - amount);
    };

    const handleIncrement = (amount) => {
        setValue(value + amount);
        sendToServer(value + amount);
    };

    const sendToServer = async (value) => {
        const query = {
            id: BaseCharInfoStore.id,
            [props.type]: value,
        };
        try {
            await axios.post('http://127.0.0.1:8000/characters/update', query, {
                headers: {
                    'Authorization': `Bearer ${LogininStore.token}`,
                },
            });
            if (response.ok) {
                console.log('HP updated on the server');
            } else {
                console.error('Error updating HP on the server');
            }
        } catch (error) {
        }
    };

    return (
        <>
            <div className={styles.HPBarConteiner}>
                <div className={`${styles.HPButton} btn btn-secondary`} onClick={() => handleDecrement(10)}>
                    -10
                </div>
                <div className={`${styles.HPButton} btn btn-secondary`} onClick={() => handleDecrement(1)}>
                    -1
                </div>
                <div className={styles.HPValue}>{value}</div>
                <div className={`${styles.HPButton} btn btn-secondary`} onClick={() => handleIncrement(1)}>
                    +1
                </div>
                <div className={`${styles.HPButton} btn btn-secondary`} onClick={() => handleIncrement(10)}>
                    +10
                </div>
            </div>
        </>
    );
}

export default HPBar