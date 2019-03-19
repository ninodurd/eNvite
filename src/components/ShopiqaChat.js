import React, { Component } from 'react'
import {connect} from 'react-redux'
class ShopiqaChat extends Component {
  
  render() {
    
    return (
      <div className="shopiqa--chat--item--container" onClick={this.props.Active}>
         <div className="all--about--bag--button shopiqa" style={{backgroundImage:this.props.user.gradients}}>{this.props.user.group.title.charAt(0).toLowerCase()}</div>
         <div className="shopiqa--chat--item--text"><p>{this.props.user.group.title}</p>
        {this.props.user.group.members.map((member,i,array)=>{
          return array.length - 1 == i ?`${member}.`:`${member},`
        })}
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
  

export default connect(mapStateToProps)(ShopiqaChat)