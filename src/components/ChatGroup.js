import React, { Component } from 'react'
import Groups from './Groups'
import closeIcon from '../assets/nounClose2043081000000Copy.png'
import menuIcon from '../assets/group2Copy2.png'
import addIcon from '../assets/group33.png'
import deleteIcon from '../assets/nounDelete2025414000000.png'
import {connect} from 'react-redux'
import GroupAdmin from './GroupAdmin';

class ChatGroup extends Component {
    handleClickBag=(e)=>{
        const personShopBag= this.props.users.filter(user=>{ return e.target.id== user.id})
        console.log(personShopBag)
       }
   
    render() {
        console.log(this.props.openUser)
        return (
            <div className={this.props.groupInfoAnim + " chat--group"}>
                <div className="lines " onClick={this.props.scrollDownCgroup}>
                    <hr />
                    <hr />
                    <hr />
                </div>

                <div className="chat--page--header">
                    <div className="new--group--header--icons">
                        <img src={menuIcon} className="chat--button--menu" onClick={this.props.openUser}/>
                        <p>Chat Group Name</p>
                        <div onClick={this.props.cGroupClose}>
                        <img src={closeIcon} className="chat--button--close" />
                        </div>
                    </div>
                </div>
                <div className="chat--group--container">
                    <div className="bag--button">
                        <div className="all--about--bag--container">
                            <div className="all--about--bag">
                                <div className="all--about--bag--button">S</div>
                                <p>  It's all about the bag</p>
                            </div>
                            <div className="bag--button--align-right">
                                <i className="fas fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    <div> <p className="participant--text">{this.props.users.length} PARTICIPANTS</p></div>
                    <div className="bag">
                    {this.props.users.map((user)=>{
                        return user.status==="Admin"?<GroupAdmin key={user.id} user={user} bagPage={this.props.bagPage}/>:<Groups key={user.id} user={user} bagPage={this.props.bagPage}/>
                    })}
                        <div className="groups--container">

                            <div className="add--participants" onClick={this.props.inviteFriend}>
                                <button className="add--participants--button" ><img src={addIcon} /></button>
                                <p>Add Participant</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="group--chat--delete--group">
                    <div className="delete--participants">
                        <button className="delete--group--button"><img src={deleteIcon} /></button>
                        <p>Delete Group</p>
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




export default connect(mapStateToProps)(ChatGroup)

