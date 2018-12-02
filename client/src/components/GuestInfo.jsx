import React from 'react';
import moment from 'moment';
require('../styles/info.css');

const GuestInfo = ({ guest, selectGuest }) => {
  const startDate = moment(guest.reservation.startTimestamp).format('LLL');
  const endDate = moment(guest.reservation.endTimestamp).format('LLL');
  
  return (
    <div className='guest-info-container' onClick={() => selectGuest(guest)}>
      <div className='guest-info'>
        <span>{`Guest: ${guest.firstName} ${guest.lastName}`}</span><br/>
        <span>{`Room Number: ${guest.reservation.roomNumber}`}</span><br/>
        <span>{`${startDate} - ${endDate}`}</span>
      </div>
    </div>
  );
}

export default GuestInfo;