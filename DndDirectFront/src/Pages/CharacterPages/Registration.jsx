import React, { useState, useEffect } from 'react';
import styles from './Registration.module.css';

function Registration() {
    return (
        <div className={`${styles.RegistrationModal} modal`} tabIndex={-1}>
            <div className={`${styles.RegistrationModalDialog} modal-dialog`}>
                <div className={`${styles.RegistrationModalContent} modal-content`}>
                    <div className={`${styles.RegistrationModalHeader} modal-header`}>
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className={`${styles.RegistrationModalHeader} modal-body`}>
                        <p>Modal body text goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;