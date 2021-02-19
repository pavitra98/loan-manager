import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


Accounts.config({
  forbidClientAccountCreation: true,
});
