import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Login from './components/Login.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'register',
      acc: null
    }
    this.setAppState = this.setAppState.bind(this);
  }

  setAppState(event) { this.setState(event) }

  render() {
    const { display } = this.state;

    switch(display) {
      case 'register':
        return <div className="App">
          <UserForm
            setAppState={this.setAppState}
          />
        </div>
      case 'login':
        return <div className="App">
          <Login 
            setAppState={this.setAppState}
          />
        </div>
      default:
    }
  }
}