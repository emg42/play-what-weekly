import React, { Component } from 'react';
import {newSearch} from './PlayListForm';

export default class PlayListItem extends Component {
  render () {
    const {songInfo} = this.props
    // console.log("I am logging this from playlistitem", this)
    // console.log("I am logging this.props from playlistitem", this.props)
    return(

      <div className="card" >
        <p className="card-text">User:{songInfo.userName}</p>
        <p className="card-text">Artist/Band: {songInfo.songArtist}</p>
        <p className="card-text">Title:{songInfo.songTitle}</p>
        <p className="card-text">Notes:{songInfo.songNotes}</p>

      </div>
    )
  }
}
