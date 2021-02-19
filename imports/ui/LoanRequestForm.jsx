import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const LoanRequestForm = () => {

  const [loanreq, setReq] = useState({});

  const submit = e => {
    e.preventDefault();

    if (!text) return;

    Meteor.call('loanreq.insert', loanreq);

    setReq({});
  };

  return (
    <form onSubmit={submit} className="loanreqform">
      <h2>Loan Request Form</h2>
      <div>
        <label>Type of Loan</label>
        <select name="loan" id="loan">
          <option name="selectloan">--Loan--</option>
          <option name="car-loan">Car Loan</option>
          <option name="home-loan">Home Loan</option>
          <option name="business-loan">Business Loan</option>
          <option name="gold-loan">Gold Loan</option>
          <option name="eductaion-loan">Eductaion Loan</option>
          <option name="personal-loan">Personal Loan</option>
        </select>
        <label>Total Amount Required</label>
        <input type="text" placeholder="loan amount required"></input>
        <label>Loan Tenure</label>
        <select name = "tenure" id="tenure">
          <option name="selecttenure">--Tenure--</option>
          <option name="6 months">6 Months</option>
          <option name="12 months">12 Months</option>
          <option name="18 months">18 Months</option>
          <option name="2 Years">2 Years</option>
        </select>
      </div>
      <div>
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
};
