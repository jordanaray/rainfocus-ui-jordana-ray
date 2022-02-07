import React from 'react'
import '../sass/modal.scss'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <div className="modal-header">
                    <span className="modal-title sm-text">Edit Badge</span>
                </div>
                <div className="modal-body">
                    <ul className="light xxs-text">
                        <li><input type="text" placeholder="First Name"></input></li>
                        <li><input type="text" placeholder="Preferred First Name for Badge"></input></li>
                        <li><input type="text" placeholder="Last Name"></input></li>
                        <li><input type="text" placeholder="Company"></input></li>
                        <li><input type="text" placeholder="Onsite - Badge Holders"></input></li>
                        <li><input type="text" placeholder="Onsite - Aux"></input></li>
                    </ul>
                </div>
                <div className="modal-footer">
                    <button className="modal-btn" type="button" onClick={handleClose}>
                        Close
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Modal