import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content'


export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

export default App