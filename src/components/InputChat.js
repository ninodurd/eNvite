import React from 'react'
import inputPlan from '../assets/pathCopy.png'

const InputChat = () => {
    return (
        <div className="new--group--input--container">
            <form >
                <input type="text" name="message" className="new--group--input" />
            </form>
            <div className="sent--input--plan--icon"><img src={inputPlan} /></div> 
        </div>
    )
}

export default InputChat
