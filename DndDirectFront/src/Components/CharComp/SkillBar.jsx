import React from 'react';
import styles from "./SkillBar.module.css"

function SkillBar(props) {
    function calculate(value, skillpoint, posValue) {
        if (skillpoint === 0) {
            return value;
        } else if (skillpoint === 1) {
            return value + posValue;
        } else if (skillpoint === 2) {
            return value + (posValue * 2);
        }
    }

    const CalculatedValue = calculate(Math.ceil((props.value - 10) / 2), props.skillpoint, props.posValue);
    const FinalValue = CalculatedValue >= 0 ? `+${CalculatedValue}` : `${CalculatedValue}`;


    return (
        <>
            <div className={styles.SkillConteiner}>
                <div className={styles.SkillValue}>
                    {FinalValue}
                </div>
                <div className={styles.SkillName}>
                    {props.name}
                </div>
            </div>
        </>
    );
}

export default SkillBar