import React, { Component } from 'react';


export default class PlayListItem extends Component {
  render () {
    return(
      <div className="card" style="width: 20rem;">
        <p className="card-text">User:</p>
        <p className="card-text">Artist/Band:</p>
        <p className="card-text">Title:</p>
        <p className="card-text">Notes:</p>
        
      </div>
    )
  }
}
