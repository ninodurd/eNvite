import React, { Component } from 'react'
import {connect } from 'react-redux'

 class Groups extends Component {
    handleClick = (e) =>{
        alert(e.target);
    }
    render() {
       
      
        
        return (
            <div className="groups--container" onClick={this.props.bagPage}>
                <div className="groups--container--partipicants" >

                    <div className="all--about--bag--img--container" >
                        <img className="group--my--img " src={this.props.user.image}/>
                    </div>
                    <div className="all--about--bag--name">
                        <p> {this.props.user.name} {this.props.user.last_name}</p>
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
  
  
  
  
  export default connect(mapStateToProps)(Groups)