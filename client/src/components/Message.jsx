import React, { Component } from 'react';
import { navigate } from '@reach/router';
require('../styles/message.css');

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      useTemplate: false,
      chatHistory: [],
    };
    this.messageInput = this.messageInput.bind(this);
    this.manualInput = this.manualInput.bind(this);
    this.selectTemplate = this.selectTemplate.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.changeGuest = this.changeGuest.bind(this);
    this.updateScrollPosition = this.updateScrollPosition.bind(this);
  }

  selectTemplate(template) {
    this.setState({
      useTemplate: true,
    });

    if (template.target.value === 'Empty Template') {
      this.setState({
        message: '',
      });
    } else {
      this.changeMessage(template);
    }
  }

  changeMessage(message) {
    this.setState({
      message: message.target.value,
    });
  }

  manualInput() {
    const { message } = this.state;
    
    this.setState({
      useTemplate: false,
    });
  }

  sendMessage() {
    const { chatHistory, message } = this.state;

    if (message === null || message.replace(/\s/g, '') === '') {
      window.alert('Error, empty message!');
    } else {
      this.setState({
        chatHistory: [...chatHistory, message],
        useTemplate: true,
      });
    }
  }

  messageInput() {
    const { message, useTemplate } = this.state;
    return useTemplate ? <textarea readOnly value={message}></textarea> : <textarea onChange={(e) => this.changeMessage(e)}></textarea>;
  }

  updateScrollPosition() {
    const { chatHistory } = this.state;

    if (chatHistory.length > 0) {
      const chatbox = document.getElementById('chatbox');
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  }

  changeGuest() {
    navigate('/guests');
  }

  render() {
    const { guest, company, templates } = this.props;
    const { chatHistory } = this.state;

    return (
      <div className='message-container'>
        <div className='info-container'>
          <div className='message-guest-container'>
            <div className='message-guest-info-container'>
              <div className='message-info'>{`Guest: ${guest.firstName} ${guest.lastName}`}</div>
            {/* </div>
            <div className='message-company-info-container'> */}
              <div className='message-info'>{`Business: ${company.company}`}</div>
              <div className='message-info'>{`Room Number: ${guest.reservation.roomNumber}`}</div>
            </div>
            <div className='change-guest-container'>
              <button onClick={() => this.changeGuest()}>Change Guest</button>
            </div>
          </div>
        </div>
        <div className='chat-container'>
          <div className='chatbox-container'>
            <div className='chatbox' id='chatbox'>
              {chatHistory.map((chatboxMessage) => (
                <div className='chatbox-message'>{chatboxMessage}</div>
              ))}
              {this.updateScrollPosition()}
            </div>
          </div>
          <div className='templates-container'>
            <select onChange={this.selectTemplate} size='5'>
              <option>Empty Template</option>
              {templates.map((template) => {
                return <option value={template.message}>{template.description}</option>;
              })}
            </select>
            <button onClick={() => this.manualInput()}>Edit</button>
          </div>
          <div className='text-container'>
            {this.messageInput()}
            <div className='send-button-container'>
              <button onClick={() => this.sendMessage()}>Send</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;