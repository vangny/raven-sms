import React, { Component } from 'react';
import { navigate } from '@reach/router';
require('../styles/start.css');

class Start extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const  { getGuests } = this.props;
    return (
      <div className='start-container'>
        <div className='start-button' onClick={() => getGuests()}>Start</div>
      </div>
    );
  }
}

export default Start;