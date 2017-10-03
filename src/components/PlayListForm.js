import React, { Component } from 'react';
import '../styles/index.css'

export default class PlayListForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }
  }

  _handleSubmit = (event) => {
    event.preventDefault()
    console.log('handling submit')
    // this.setState({displayName: this.state.inputVal, inputVal: ""})
}

  _handleUserName = (event) => {
    // console.log('handling change')
    this.setState({userName: event.target.value})
  }
  _handleSongArtist = (event) => {
    this.setState({songArtist: event.target.value})
  }
  _handleSongTitle = (event) => {
    this.setState({songTitle: event.target.value})
  }

  _handleSongNotes = (event) => {
    this.setState({songNotes: event.target.value})
  }
  render () {
    console.log(this.state)
    return(
      <form onSubmit={this._handleSubmit}>
        <fieldset>
          <div className="form-group">
            <label>Username</label>
            <input onChange={this._handleUserName} value={this.state.userName} className="form-control" type="" name= "" placeholder="Name"/>
          </div>

          <br/>
          <div className="form-group">
            <label>Artist/Band</label>
            <input onChange={this._handleSongArtist} value={this.state.songArtist} className="form-control" placeholder="Artist"/>
          </div>
          <br/>
          <div className="form-group">
            <label>Song Title</label>
            <input onChange={this._handleSongTitle} value={this.state.songTitle} className="form-control" placeholder="Song Title"/>
          </div>
          <br/>
          <div className="form-group">
            <label for="notes-text-area">Notes about Song</label>
            <textarea onChange={this._handleSongNotes} value={this.state.songNotes} className="form-control" id="notes-text-area"></textarea>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </fieldset>
      </form>
    )
  }
}
