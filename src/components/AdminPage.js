import React, { Component } from 'react'
import {connect} from "react-redux"
import BottomNavBar from './BottomNavBar'
import ShopiqaChat from './ShopiqaChat'
import footerIcon from '../assets/fIll104.png'


class AdminPage extends Component {
  render() {
    return (
      <div className="admin--page--container">
      <header>
         <div className="admin--page--img">
         <div className="admin--page--line"></div>
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
                  return  <ShopiqaChat key={user.id} user={user}/>
            })}
            </div>
           
        </main>
        <footer>
         <div className="admin--page--footer--text">
         <img src={footerIcon} />
        <p>New Shopping Journey</p>
         </div>
        <BottomNavBar/>
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
  

export default connect(mapStateToProps)(AdminPage)