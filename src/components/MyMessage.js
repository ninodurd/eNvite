import React, { Component } from 'react'
import {connect} from 'react-redux'

class MyMessage extends Component {
    render() {
        return (
            <div className="my--message--container">
                <div className="my--message">
                <img src={this.props.userName[0].image}/>
                    <div className="my--message--text">
                        <p>{this.props.userName[0].messages}</p>
                    </div>
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
  
  
  
  
  export default connect(mapStateToProps)(MyMessage)