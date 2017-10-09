import React, { Component } from 'react';
import '../styles/index.css'

export default class PlayListForm extends Component {
  constructor() {
    super()
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }
  }

  addToList = (e) => {
      e.preventDefault();

      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }


  _handleSubmit = (event) => {
    event.preventDefault()
    // console.log('handling submit', this)
    const newSearch = {
      userName: this.state.userName,
      songArtist: this.state.songArtist,
      songTitle: this.state.songTitle,
      songNotes: this.state.songNotes
    }
}

  _handleUserName = (event) => {
    // console.log('handling change')
    // console.log(event.target);

    this.setState({userName: event.target.value})
  }
  _handleSongArtist = (event) => {

    this.setState({songArtist: event.target.value})
  }
  _handleSongTitle = (event) => {
    // console.log(event.target);

    this.setState({songTitle: event.target.value})
  }

  _handleSongNotes = (event) => {
    // console.log(event.target);

    this.setState({songNotes: event.target.value})
  }



  render () {
    // console.log(this.state)
    return(
      <form onSubmit={this.addToList}>
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
            <label htmlFor="notes-text-area">Notes about Song</label>
            <textarea onChange={this._handleSongNotes} value={this.state.songNotes} className="form-control" id="notes-text-area"></textarea>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </fieldset>
      </form>
    )
  }
}
