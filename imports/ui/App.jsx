import React, { Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { LoginForm } from './LoginForm.jsx';
import { Register } from './Register.jsx';
import { LoanRequestForm } from './LoanRequestForm.jsx';
import { LoanConfirmForm } from './LoanConfirmForm.jsx';

const logout = () => Meteor.logout();

export const App = () => {

  const user = useTracker(() => Meteor.user());
  return(
    <div className="app">
    <header>
      <div className="app-bar">
        <div className="app-header">
          <h1>Loan Manager</h1>
        </div>
      </div>
    </header>
        <div className="main">
          {user?(
            <Fragment>
              <div>
                <button  type="submit" onClick={logout}>
                      LogOut {user.username} 🚪
                </button>
              </div>
              <LoanRequestForm/>
              <LoanConfirmForm/>
            </Fragment>
          ):(
            <div>
              <div className>
                <LoginForm/>
              </div>
            </div>
          )}

        </div>
    </div>
  );
};
