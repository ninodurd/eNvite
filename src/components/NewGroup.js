import React from 'react'
import InputChat from './InputChat'
import settingIcon from '../assets/nounSetting1050013000000.png'
import menuIcon from '../assets/group2Copy2.png'
const NewGroup = (props) => {
    return (
        <div className={props.newPageAnim +" new--group"}>
            <div className="new--group--wrapper">
            <div className="lines" onClick={props.OpenNewGroup}>
                <hr />
                <hr />
                <hr />
            </div>
            <div className="new--group--header">
                    <div className="new--group--header--icons">
                        <img src={menuIcon} className="chat--button--menu" onClick={props.openUser}/>
                        <p>New Group</p>
                        <img src={settingIcon} className="chat--button--settings" />
                    </div>
                </div>
            <div className="new--group--container">

                <div className="new--group--main">
                    <h3>eNvite Your Friends</h3>
                    <p>where's the best way to call your friends in?</p>
                    <div className="new--group--main--container">
                        <div className="new--group--icon--container"><i className="fab fa-facebook-f new--group--facebook--button " /></div>
                        <div className="new--group--icon--container"><i className="fab fa-telegram-plane new--group--plan--button"></i></div>
                        <div className="new--group--icon--container"><i className="fab fa-whatsapp new--group--whatsapp--button"></i></div>
                        <div className="new--group--icon--container"><i className="fas fa-envelope new--group--envelope--button"></i></div>
                    </div>
                </div>
                <InputChat />
            </div>
            </div>
        </div>
    )
}

export default NewGroup
