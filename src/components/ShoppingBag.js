import React, { Component } from 'react'
import ShoppingBagItem from './ShoppingBagItem';
import {connect} from 'react-redux'

class ShoppingBag extends Component {
 
  render() {
    return (
      <div className={this.props.closebagAnim +" shopping--bag--container"} >
        <div className="lines " onClick={this.props.bagClose}>
          <hr />
          <hr />
          <hr />
        </div>

        <div className="chat--page--header">
          <div className="shopping--bag">
          <div className="shopping--bag--header--img">
          <img className="group--my--img" src="https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/md10004279/4f4fe210-6d73-4fba-b806-02695d292b73_thumb.jpg" />
          </div>
          <div className="shopping--bag--header-text">
          <h4>Emma' Green</h4>
          <p>Shopping bag</p>
          </div>
        </div>
        </div>
        <div className="shopping--bag--main">
        <ShoppingBagItem />
        <ShoppingBagItem />
        <ShoppingBagItem />
        <ShoppingBagItem />
        <ShoppingBagItem />
        <ShoppingBagItem />
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




export default connect(mapStateToProps)(ShoppingBag)

