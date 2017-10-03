import React, { Component } from 'react';
import '../styles/index.css'

export default class NavBar extends Component {
  render () {
    return (
      <div className="container">
        <nav className="navbar d-flex flex-row">
          <img className="w-50 h-50 logo" src=".././public/favicon.ico" alt="i am an icon"/>
          <h1>Play What!?</h1>
        </nav>
      </div>
          )

  }
}
