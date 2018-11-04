import React, { Component } from 'react';
import './App.css';
import { Carousel } from './ui/carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel rows={2} columns={2} cursor={0} />
      </div>
    );
  }
}

export default App;
