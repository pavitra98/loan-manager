import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { LoanCollection } from '/imports/db/LoanCollection';


const insertLoan = (loanreq, user) =>
  LoanCollection.insert({
    loanreq: loanreq,
    userId: user._id,
    createdAt: new Date(),
  });

  const SEED_USERNAME = 'abc@xyz.com';
  const SEED_PASSWORD = 'password';

  Meteor.startup(() => {

    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
      Accounts.createUser({
        username: SEED_USERNAME,
        password: SEED_PASSWORD,
      });
    }

    const user = Accounts.findUserByUsername(SEED_USERNAME);

  });
