function PasswordModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className=".close-button" onClick={onClose}>Close</button>
                <h2>Password Requirements</h2>
                <p>Your password should be at least 8 characters, contain both upper and lower case letters, and have at least one number and one special character.</p>
            </div>
        </div>
    );
}

export default PasswordModal;
