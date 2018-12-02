import React from 'react';
require('../styles/info.css')

const CompanyInfo = ({ company, selectCompany }) => {
  return (
    <div className='company-info-container' onClick={() => selectCompany(company)}>
      <div>
        <span>{`Company: ${company.company}`}</span><br/>
        <span>{`City: ${company.city}`}</span>
      </div>
    </div>
  );
}

export default CompanyInfo;