import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div>
        {this.props.products.map((item,index,arr)=>{
           return (
               <div className="items">
               <h2>{item.name}</h2>
               <img src={item.img} className="pict"/>
               <p>{item.price+" "+"USD"}</p>
               </div>
           )
        })}
      </div>
    )
  }
}
