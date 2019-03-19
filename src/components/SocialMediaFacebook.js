import React, { Component } from 'react'

export default class SocialMediaFacebook extends Component {
  render() {
    return (
        <div className="groups--container">
        <div className="groups--container--partipicants">

            <div className="all--about--bag--img--container">
            <button className="new--friend--page--facebook--button new--friend--page--button"><i class="fab fa-facebook-f"></i></button>
            </div>
            <div className="all--about--bag--name">
                <p >  Facebook</p>
            </div>
            <div className="bag--button--align-right">
                <i className="fas fa-angle-right"></i>
            </div>
        </div>
    </div>
    )
  }
}
