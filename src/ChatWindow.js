import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChatWindow extends Component {

  state = {
    message: '',
  }

  handleChange = event => {
  	this.setState({ message: event.target.value });
  }

  handleClick = event => {
    event.preventDefault();
  	this.props.handleClick({ username: this.props.username, text: this.state.message });
  	this.setState({ message: '' });
  }
  
  isDisabled = () => {
    return this.state.message === '';
  }

  render () {
    return (
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.username}</div>

            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === this.props.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input type="text" onChange={this.handleChange} value={this.state.message} className="form-control" placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button onClick={this.handleClick} className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
    );  
  }
}

ChatWindow.propTypes = {
	messages: PropTypes.array,
	username: PropTypes.string,
	handleClick: PropTypes.func,
};

export default ChatWindow;