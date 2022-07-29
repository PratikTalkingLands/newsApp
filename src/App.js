import './App.css';
import React from 'react';
import { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';


export default class App extends Component {
  x = 'kiran'
  render() {
    return (
      <div>
        <NavBar />
        <News />
      </div>
    )
  }
}
