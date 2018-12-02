import React, { Component } from 'react';
import CompanyInfo from './CompanyInfo';
require('../styles/category.css');

const Companies = ({ companies, selectCompany }) => {
  return (
    <div className='company-container'>
      <div className='companies'>
        {companies.map((company) => 
          <CompanyInfo company={company} selectCompany={selectCompany} key={company.id} />
        )}
      </div>
    </div>
  );
}

export default Companies;