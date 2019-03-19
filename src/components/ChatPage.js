import React from 'react'
import InputChat from './InputChat'
import FriendMessage from './FriendMessage'
import MyMessage from './MyMessage'
import settingIcon from '../assets/nounSetting1050013000000.png'
import menuIcon from '../assets/group2Copy2.png'


const ChatPage = (props) => {
  console.log(props.activeChatAnim)
  return (
    <div className={props.activeChatAnim +" chat--page--container"}>
      <div className="lines chat--page--lines" onClick={props.Active}>
        <hr />
        <hr />
        <hr />
      </div>
      <div className="chat--page--header">
        <div className="new--group--header--icons" >
          <img src={menuIcon} className="chat--button--menu" onClick={props.openUser} />
          <p>Chat Group Name</p>
          <div onClick={props.groupInfo}>
          <img src={settingIcon} className="chat--button--settings" />
          </div>
        </div>
      </div>

      <div className="chat--page--message--container">
        <FriendMessage className="chat--message--right" />

        <MyMessage className="chat--message--left" />
        <FriendMessage className="chat--message--right" />
        <MyMessage className="chat--message--left" />
      </div>
      <InputChat />

    </div>
  )
}

export default ChatPage
