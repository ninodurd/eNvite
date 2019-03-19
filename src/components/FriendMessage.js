import React, { Component } from 'react'
import {connect} from 'react-redux'

class FriendMessage extends Component {
    render() {
        return (
            <div className="friend--message--container">
                <div className="friend--message">
                    <div className="friend--message--text">
                        <h5>{this.props.userName[1].name} {this.props.userName[1].last_name}</h5>
                        <p>{this.props.userName[1].messages}</p>
                    </div>
                    <img src={this.props.userName[1].image} />
                </div>
            </div>
        )
    }
}



const mapStateToProps =(state)=> {
    return {
        userName: state.userInfo
    }
  }
  
  
  
  
  export default connect(mapStateToProps)(FriendMessage)