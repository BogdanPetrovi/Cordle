import React from "react";

function Modal({children, open, onClose}) {
    if(!open) return null
    return(
        <>
            <div id="overlay"/>
            <div id="modal">
                {children}
                <button onClick={onClose}>Play again</button>
            </div>
        </>
        
    )
    
}

export default Modal;