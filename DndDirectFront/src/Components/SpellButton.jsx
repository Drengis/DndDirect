import React from 'react';
import styles from "./SpellButton.module.css";

function SpellButton(props) {
    const handleClick = () => {
        // Вызов обработчика события при нажатии на кнопку и передача id заклинания
        props.onClick(props.id);
    };

    return (
        <>
            <button type="button" className={`${styles.btn} btn btn-secondary`} onClick={handleClick}>
                {props.name}
            </button>
        </>
    );
}

export default SpellButton;