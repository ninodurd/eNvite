import React from 'react'
import googleIcon from '../assets/googleIcon.png'
import mainIcon from '../assets/group3.png'
import posed, { PoseGroup } from 'react-pose';

const Modal = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 300,
        transition: {
            y: {
                type: 'spring',
                velocity: 50,
                damping: 100,
                ease: [.01, .64, .99, .56],
            },
            default: { duration: 500 }
        }
    },
    exit: {
        y: -100,
        opacity: 0,
        transition: {
            y: {
                type: 'spring',
                velocity: 50,
                damping: 100,
                ease: [.01, .64, .99, .56],
            },
            default: { duration: 300 }
        }
    }
});


const LogIn = (props) => {
    console.log(props.AnimClassName)
    return (
                    <div className={props.AnimClassName + " logIn--main--container"}>
                        <div className="logIn--line line" onClick={props.MainButtonClick}></div>
                        <div className="logIn--container">
                            <div className="login--wrapper">
                                <img src={mainIcon} className="chat--button" />
                                <h1>Hello.</h1>
                                <p> To start Online Mall mood with your friends you must be connected.</p>
                                <div className="button--container">
                                    <div className="logIn--facebook--button--container" onClick={props.userProfile}  > <i className="fab fa-facebook-f logIn--facebook--button"></i></div>
                                    <div className="logIn--google--button--container" onClick={props.userProfile} > <img src={googleIcon} className="fab fa-google logIn--google--button" /></div>
                                </div>
                                <p className="powered--by">Powered by <span className="logIn--button--span">eNvite</span></p>
                            </div>
                        </div>
                    </div>
    )
}

export default LogIn
