import React from 'react'
import './modal.css'

const Modal = props => {

    if (!props.show) {
        console.log('show = false, return null')
        return null
    } else {
        console.log('show = true, return Model')
    }

    return (
        <div className="modalmodal" onClick={props.onClose}>

            <div className="modalContent" onClick={e => e.stopPropagation()}>

                <div className="modalHeader">
                    <h4 className="modalTitle">Thank You!</h4>
                </div>

                <div className="modalBody">
                    You are all set! <br />
                    We will reach back out to you shortly
                </div>

                <div className="modalFooter">
                    <button onClick={props.onClose} className="modalButton">Close</button>
                </div>

            </div>
        </div>
    )
}

export default Modal