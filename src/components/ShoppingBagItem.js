import React, { Component } from 'react'

export default class ShoppingBagItem extends Component {
  render() {
    return (
      <div className="shopping--bag--item--container">
        <div className="shopping--bag--item--wrapper">
        <div className="shopping--bag--item--img">
            <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/12/10/carloe.jpg"/>
            <p>TiTle of the bag you liked </p>
        </div>
        <div className="shopping--bag--price">
        <div className="first--price"><p>$19</p><span>90</span></div>
        <div className="price-line old--price"><p>$49</p><span>00</span></div>
        </div>
        </div>
      </div>
    )
  }
}
