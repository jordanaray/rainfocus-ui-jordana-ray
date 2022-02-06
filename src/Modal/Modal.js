import React from 'react'
import './Modal.scss'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <div className="modal-header">
                    <h4 className="modal-title">modal title</h4>
                </div>
                <div className="modal-body">body</div>
                <div className="modal-footer">
                    <button type="button" onClick={handleClose}>
                    Close
                </button></div>
            </section>
        </div>
    )
}

export default Modal