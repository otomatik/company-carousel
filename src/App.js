import React, { Component } from 'react';
import './App.css';
import { Carousel } from './ui/carousel';
import { data } from './data';
import { ThemeProvider } from 'styled-components';
import { theme } from './ui/theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Carousel data={data} rows={2} columns={2} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
