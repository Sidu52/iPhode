import React, { Component } from 'react'
import gamestyle from'./game.module.css'
export default class game extends Component {
  render() {
    return (
      <div className={gamestyle.display}>
        <h1>Game</h1>
      </div>
    )
  }
}
