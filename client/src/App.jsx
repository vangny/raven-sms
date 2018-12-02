import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link, Router, navigate } from '@reach/router';
import axios from 'axios';
import Start from './components/Start';
import Guests from './components/Guests';
import Message from './components/Message';
import Companies from './components/Companies';

require('./styles/main.css');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: null,
      guests: null,
      selectedCompany: null,
      selectedGuest: null,
      id: 0,
      templates: null,
    }
    this.getCompanies = this.getCompanies.bind(this);
    this.getGuests = this.getGuests.bind(this);
    this.getTime = this.getTime.bind(this);
    this.getTemplates = this.getTemplates.bind(this);
    this.selectCompany = this.selectCompany.bind(this);
    this.selectGuest = this.selectGuest.bind(this);
  }

  getCompanies() {
    axios.get('/api/companies')
      .then((response) => {
        this.setState({
          companies: response.data,
        }, () => navigate('/companies'));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getGuests() {
    axios.get('/api/guests')
      .then((response) => {
        this.setState({
          guests: response.data,
        }, () => navigate('/guests'));
      })
      .catch((err) => {
        console.log(err);
      });
    
  }

  getTime() {
    const currentTime = new Date();
    const timeOfDay = currentTime.getHours();

    if (timeOfDay < 12) {
      return 'morning';
    } else if (timeOfDay < 17) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  }

  getTemplates() {
    const { id, selectedGuest, selectedCompany } = this.state;
    const time = this.getTime();

    axios.get(`/api/messages?timedGreet=${time}&guestName=${selectedGuest.firstName}&companyName=${selectedCompany.company}&roomNum=${selectedGuest.reservation.roomNumber}`)
      .then((response) => {
        this.setState({
          templates: response.data,
        }, () => navigate(`/message/${id}`));
      })
  }

  selectCompany(company) {
    this.setState({
      selectedCompany: company,
    }, this.getTemplates);
  }

  selectGuest(guest) {
    this.setState({
      selectedGuest: guest,
      id: guest.id,
    }, this.getCompanies);
  }

  render() {
    const { guests, id, selectedGuest, companies, selectedCompany, templates } = this.state;

    return (
      <div className='container'>
        <div className='header'>
          <div className='name' onClick={() => navigate('/')}>Raven SMS</div>
        </div>
        <Router className='main-content'>
          <Start path='/' getGuests={this.getGuests} />
          <Guests path='/guests' guests={guests} selectGuest={this.selectGuest} />
          <Companies path='/companies' companies={companies} selectCompany={this.selectCompany} />
          <Message path={`/message/${id}`} guest={selectedGuest} company={selectedCompany} templates={templates} />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));