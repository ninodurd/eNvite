
import React, { Component } from 'react'
import {connect} from "react-redux"
import BottomNavBar from './BottomNavBar'
import ShopiqaChat from './ShopiqaChat'
import footerIcon from '../assets/fIll104.png'


class UserProfile extends Component {
  render() {
    console.log(this.props.animuserProfile )
    return (
      <div className={this.props.animuserProfile + " admin--page--container"}>
      <header>
         <div className="admin--page--img">
         <div className="admin--page--line" onClick={this.props.userProfile}></div>
        <img src="http://images6.fanpop.com/image/photos/37800000/Cara-Delevingne-3-cara-delevingne-37808721-489-601.jpg"/>
        </div>
        <div className="admin--page--header--text">
               <h3>Welcome {this.props.users[0].name}.</h3>
               <div className="admin--page--header--text--description">
               <p>you're Almost ready to start your shopping date.</p>
               </div>
        </div>
        </header>
        <main>
            <h4>Shopiqa Chats</h4>
            <div className="shopiqa--item">
            {this.props.users.map(user=>{
                  return  <ShopiqaChat key={user.id} user={user} Active={this.props.Active}/>
            })}
            </div>
           
        </main>
        <footer>
         <div className="admin--page--footer--text">
         <img src={footerIcon} />
        <p>New Shopping Journey</p>
         </div>
        <BottomNavBar OpenNewGroup={this.props.OpenNewGroup} userSetting = {this.props.userSetting}/>
        </footer>
      </div>
    )
  }
}


const mapStateToProps =(state)=> {
    return {
        users: state.userInfo
    }
  }
  

export default connect(mapStateToProps)(UserProfile)