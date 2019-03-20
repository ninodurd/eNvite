import React, { Component } from 'react'
import BottomNavBar from './BottomNavBar'
import closeIcom from '../assets/nounClose2043081000000Copy.png'
import {connect} from 'react-redux' 


class Settings extends Component {
  render() {
    return (

      <div className="setting--container">
      
        <div className="setting--img">
        <img src="http://images6.fanpop.com/image/photos/37800000/Cara-Delevingne-3-cara-delevingne-37808721-489-601.jpg"/>
        </div>
        <img  src={closeIcom} className="close--button" onClick={this.props.closeSetting}/>
       
        <div className="input--container">
        <form className="setting--inputs">
        <div>
        <label htmlFor="fname" className="first--name">First Name</label>
        <label htmlFor="lname" className="last--name">Last Name</label><br/> 
        </div>
        <input defaultValue={this.props.users[0].name} type="text" name="fname" className="fname"/>
        <input defaultValue={this.props.users[0].last_name} type="text" name="lname" className="lname"/> <br/>
        <label >Email Address</label><br/> 
        <input defaultValue={this.props.users[0].email} type="text" name="email" className="email"/> <br/>
        <label >Birth Date</label><br/> 
        <input defaultValue={this.props.users[0].birth_day} type="text" name="bday" className="bday"/> <br/>
       </form>
       </div>
     
     <div className="bottom--navbar--settings--container">
                <div className="setting--page--submit--button" onClick={this.props.OpenNewGroup}>
                    <input type="button"/>
                </div>
                <div className="setting--bottom--settings--icons">
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
      </div>
     
    )
  }
}


const mapStateToProps =(state)=> {
  return {
      users: state.userInfo
  }
}


export default connect(mapStateToProps)(Settings)