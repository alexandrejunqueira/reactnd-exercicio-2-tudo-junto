import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow'; 

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  
  state = {
  	messages: [
  		{ username: 'Amy', text: 'Hi, Jon!' },
  		{ username: 'Amy', text: 'How are you?' },
  		{ username: 'John', text: 'Hi, Amy! Good, you?' },
	]
  }
  
  update = message => {
  	this.setState(oldState => ( { messages: [...oldState.messages, message] }));
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
    		<ChatWindow messages={this.state.messages} username="Amy" handleClick={this.update} />
    		<ChatWindow messages={this.state.messages} username="John" handleClick={this.update} />
        </div>
      </div>
    );
  }
}

export default App;
