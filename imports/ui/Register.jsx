import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();
    var username = e.target.username.value;
    var password = e.target.password.value;
    Accounts.createUser({
      username:username,
      password:password
    });
  };

  return(
    <form onSubmit={submit} className="login-form">
      <div>
        <label htmlFor="username">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="username"
          required
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          type="password"
          placeholder="Password"
          name="confirmpassword"
          required
        />
      </div>
      <div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};
