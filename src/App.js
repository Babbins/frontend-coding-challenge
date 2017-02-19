import React, { Component } from 'react';
import 'whatwg-fetch';
import Events from './Events';
import secrets from '../secrets.json';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    fetch('https://api.eventable.com/v1/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: secrets.username,
        password: secrets.password
      })
    })
    .then(res => res.json())
    .then(res => {
      const token = res.token
      return fetch('https://api.eventable.com/v1/events/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }
      })
    })
    .then(res => res.json())
    .then(res => {
      this.setState({events: res.results});
    });
  }

  render() {
    return (
      <div className="App">
        <Events events={this.state.events} />
      </div>
    );
  }
}

export default App;
