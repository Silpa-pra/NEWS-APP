import './App.css';

import React, { Component } from 'react';
import NavBar from './NavBar';
import News from './component/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News />
      </div>
    );
  }
}
