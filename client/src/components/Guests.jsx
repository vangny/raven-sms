import React, { Component } from 'react';
import GuestInfo from './GuestInfo';
require('../styles/category.css');

const Guests = ({ guests, selectGuest }) => {
  return (
    <div className='guest-container'>
      <div className='guests'>
        {guests.map((guest) => 
          <GuestInfo guest={guest} selectGuest={selectGuest} key={guest.id} />
        )}
      </div>
    </div>
  );
}

export default Guests;