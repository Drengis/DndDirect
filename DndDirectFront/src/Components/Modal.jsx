import React, { useRef } from 'react';
import styles from './Modal.module.css';

function Modal(props) {
    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            props.onclick();
        }
    };

    const handleModalClick = () => {
        // Предотвращаем всплытие события клика внутри модального окна
        event.stopPropagation();
    };

    return (
        <div className={`${styles.Modal} modal`} tabIndex={-1} onClick={handleClickOutside}>
            <div className={`${styles.ModalDialog} modal-dialog`} ref={modalRef} onClick={handleModalClick}>
                <div className={`${styles.ModalContent} modal-content`}>
                    <div className={`${styles.ModalHeader} modal-header`}>
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.onclick}></button>
                    </div>
                    <div className={`${styles.ModalBody} modal-body`}>
                        {props.body}
                    </div>
                    <div className={`${styles.ModalFooter} modal-footer`}>
                        {props.footer}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;