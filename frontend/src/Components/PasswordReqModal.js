import React from 'react';

function PasswordModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className=".close-button">Close</button>
                <p>Your password should be at least 8 characters, contain both upper and lower case letters, and have at least one number and one special character.</p>
            </div>
        </div>
    );
}

export default PasswordModal;
