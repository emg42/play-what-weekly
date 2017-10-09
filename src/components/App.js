import React, { Component } from 'react';

import NavBar from './NavBar';
import PlayList  from './PlayList';
import PlayListForm from './PlayListForm';


import '../styles/App.css';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="container wrapper">
        <NavBar/>
        <PlayListForm/>
        <PlayList/>
    </div>
    )
  }
}

export default App;
