import React, { Component } from 'react';
import './App.css';
import { Carousel } from './ui/carousel';
import { data } from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel data={data} rows={2} columns={2} />
      </div>
    );
  }
}

export default App;
