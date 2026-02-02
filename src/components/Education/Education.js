import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="educationSection" id="Education">
      <h2 className="educationHeading">Education</h2>
      <div className="educationList">
        <div className="educationCard">
          <h3>B.E.CSE</h3>
          <p className="educationDetails">Mangayarkarasi College Of Engineering , Paravai , Madurai.</p>
          <p className="educationYear">2021 - 2025</p>
          <p className="educationScore">CGPA: <span>7.69</span></p>
        </div>

        <div className="educationCard">
          <h3>HSC (12th Standard)</h3>
          <p className="educationDetails">Holy Angel Higher Secondary School, Madurai.</p>
          <p className="educationYear">2020 - 2021</p>
          <p className="educationScore">Percentage: <span>76%</span></p>
        </div>

        <div className="educationCard">
          <h3>SSLC (10th Standard)</h3>
          <p className="educationDetails">Holy Angel Higher Secondary School, Madurai.</p>
          <p className="educationYear">2018 - 2019</p>
          <p className="educationScore">Percentage: <span>64%</span></p>
        </div>
      </div>
    </section>
  );
};

export default Education;
