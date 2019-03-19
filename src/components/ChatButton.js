import React from 'react'
import mainIcon from '../assets/group3.png'
const ChatButton= (props) => {
  return (
    <div className="chat--button--container--start">
  {props.messageNumber?
      <div className="chat--button--start--number--wrraper"><img  onClick={props.MainButtonClick}  src={mainIcon} className="chat--button--start"/><div className="message--number">9 </div></div>:
      <div  className="chat--button--start--wrraper">Shop with friends  <img onClick={props.MainButtonClick}  src={mainIcon} className="chat--button--start"/>  </div>}
    </div>
  )
}

export default ChatButton
