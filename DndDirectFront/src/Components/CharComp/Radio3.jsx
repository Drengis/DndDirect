import React, { useState } from 'react';
import axios from 'axios';
import styles from "./Radio3.module.css"
import LogininStore from '../../cms/LogininStore'
import BaseCharInfoStore from '../../cms/BaseCharInfoStore';

function Radio3(props) {

    const [selectedValue, setSelectedValue] = useState(null);

    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);
        sendDataToBackend(e.target.value);
    };

    const sendDataToBackend = async (value) => {
        const query = {
            characters_id: BaseCharInfoStore.id,
            [props.name]: value
        }
        console.log(query)
        try {
            await axios.post(`http://127.0.0.1:8000/charactersskills/update`, query, {
                headers: {
                    'Authorization': `Bearer ${LogininStore.token}`,
                },
            });
            console.log(`Sent data to backend: ${props.name} = ${value}`);
        } catch (error) {
            console.error('Error sending data to backend:', error);
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
                        checked={selectedValue === '0'}
                        onChange={handleRadioChange}
                    />
                    <label className="form-check-label"> </label>
                </div>
                <div className={`${styles.RadioButton} "form-check-input"`}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name={props.name}
                        id="inlineRadio2"
                        value="1"
                        checked={selectedValue === '1'}
                        onChange={handleRadioChange}
                    />
                    <label className="form-check-label"> </label>
                </div>
                <div className={`${styles.RadioButton} "form-check-input"`}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name={props.name}
                        id="inlineRadio3"
                        value="2"
                        checked={selectedValue === '2'}
                        onChange={handleRadioChange}
                    />
                    <label className="form-check-label"> </label>
                </div>
            </div>
        </div>
    );
}

export default Radio3