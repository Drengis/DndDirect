import React, { useState } from 'react';
import axios from 'axios';
import styles from "./Radio3.module.css"
import LogininStore from '../../cms/LogininStore'
import BaseCharInfoStore from '../../cms/BaseCharInfoStore';
import AlertStore from '../../cms/AlertStore';

function Radio3(props) {
    const [selectedValue, setSelectedValue] = useState(props.initialValue);

    const handleRadioChange = (e) => {
        setSelectedValue(Number(e.target.value));
        sendDataToBackend(e.target.value);
    };

    const sendDataToBackend = async (value) => {
        const query = {
            id: BaseCharInfoStore.id,
            [props.name]: value
        }
        try {
            await axios.post(`http://127.0.0.1:8000/charactersskills/update`, query, {
                headers: {
                    'Authorization': `Bearer ${LogininStore.token}`,
                },
            });
            AlertStore.AddInfoAlert('Успешно')
        } catch (error) {
            AlertStore.AddErrorAlert("Ошибка сохранения")
        };
    }

    return (
        <div className={styles.RadioConteiner}>
            <div className={styles.RadioTitle}>
                <h5>{props.title}</h5>
            </div>
            <div className={styles.ButtonConteiner}>
                <div className={`${styles.RadioButton} "form-check-input"`}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name={props.name}
                        id="inlineRadio1"
                        value="0"
                        checked={selectedValue === 0}
                        onChange={handleRadioChange}

                    />
                </div>
                <div className={`${styles.RadioButton} "form-check-input"`}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name={props.name}
                        id="inlineRadio2"
                        value="1"
                        checked={selectedValue === 1}
                        onChange={handleRadioChange}
                    />
                </div>
                <div className={`${styles.RadioButton} "form-check-input"`}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name={props.name}
                        id="inlineRadio3"
                        value="2"
                        checked={selectedValue === 2}
                        onChange={handleRadioChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Radio3