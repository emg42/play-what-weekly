import React, { Component } from 'react';
import '../styles/index.css'

export default class PlayListForm extends Component {
  render () {
    return(
      <form>
        <fieldset>
          <div className="form-group">
            <label>Username</label>
            <input className="form-control" type="" name= "" placeholder="Name"/>
          </div>

          <br/>
          <div className="form-group">
            <label>Artist/Band</label>
            <input className="form-control" placeholder="Artist"/>
          </div>
          <br/>
          <div className="form-group">
            <label>Song Title</label>
            <input className="form-control" placeholder="Song Title"/>
          </div>
          <br/>
          <div className="form-group">
            <label for="notes-text-area">Notes about Song</label>
            <textarea className="form-control" id="notes-text-area"></textarea>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </fieldset>
      </form>
    )
  }
}
