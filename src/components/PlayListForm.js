import React, { Component } from 'react';

export default class PlayListForm extends Component {
  render () {
    return(
      <form>
        <fieldset>
          <label>Username</label>
          <input type="" name= "" placeholder=""/>
          <label>Artist/Band</label>
          <input type="" name="" placeholder=""/>
          <label>Song Title</label>
          <input type="" name="" placeholder=""/>
          <label>Notes about Song</label>
          <textarea></textarea>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    )
  }
}
