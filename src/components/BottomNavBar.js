import React, { Component } from 'react'

export default class BottomNavBar extends Component {
    render() {
        return (
            <div className="bottom--navbar--container ">
                <div className="admin--page--submit--button" onClick={this.props.OpenNewGroup}>
                    <input type="button"/>
                </div>
                <div className="setting--bottom--icons">
                    <div className="bottom--navbar--icons--wrapper">
                        <button className="user"><img src={require('../assets/nounUser11228000000001.png')} /></button>
                        <button className="star"><img src={require('../assets/nounStar2097830000000.png')} /></button>
                    </div>
                    <div className="bottom--navbar--icons--wrapper--right">
                        <button className="history"><img src={require('../assets/nounHistory576599000000.png')} /></button>
                        <button className="setting" onClick={this.props.userSetting}><img src={require('../assets/nounSettings1187813000000.png')} /></button>
                    </div>
                </div>
              
            </div>
        )
    }
}
