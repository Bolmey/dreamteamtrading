import React from 'react'
import './modal.css'

const Modal = props => {


    if (!props.show) {
        return null
    }


    return (
        <div className="modal">

            <div className="modalContent">

                <div className="modalHeader">
                    <h4 className="modalTitle">Modal Title</h4>
                </div>

                <div className="modalBody">
                    Modal Content
                </div>

                <div className="modalFooter">
                    <button className="modalButton">Close</button>
                </div>

            </div>
        </div>
    )
}

export default Modal