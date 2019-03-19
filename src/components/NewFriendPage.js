import React from 'react'
import SocialMediaFacebook from './SocialMediaFacebook'
import SocialMediaTelegram from './SocialMediaTelegram'
import SocialMediaWhatsApp from './SocialMediaWhatsApp'
import SocialMediaEmail from './SocialMediaEmail'

const NewFriendPage=(props)=> {
  return (
    <div>
      <div className={props.newFriendAnim +" new--friend--container"}>
        <div className="lines " onClick={props.inviteFriend}>
          <hr />
          <hr />
          <hr />
        </div>

        <div className="chat--page--header">
          <div className="new--Friend--header--icons">
            <div></div>
            <p>eNvite Your Friends</p>
            <i className="fas fa-angle-right fa-2x"></i>
          </div>
        </div>
        <div className="new--friend--main">
        <SocialMediaFacebook />
        <SocialMediaTelegram />
        <SocialMediaWhatsApp />
        <SocialMediaEmail />
        </div>
        </div>
    </div>
  )
}

export default NewFriendPage
