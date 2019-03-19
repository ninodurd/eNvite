import React, { Component } from 'react'
import {connect } from 'react-redux'

 class GroupAdmin extends Component {
    render() {
        return (
            <div className="groups--container" onClick={this.props.bagPage}>
                <div className="groups--container--partipicants">

                    <div className="all--about--bag--img--container">
                        <img className="group--my--img " src={this.props.user.image} />
                    </div>
                    <div className="all--about--bag--name">
                        <p>  {this.props.user.name} {this.props.user.last_name}</p>
                        <div className="admin"><p className="admin--text">Admin</p></div>
                    </div>
                    <div className="bag--button--align-right">
                    
                        <i className="fas fa-angle-right"></i>
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
  
  
  
  
  export default connect(mapStateToProps)(GroupAdmin)