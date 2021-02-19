import { LoanCollection } from '/imports/db/LoanCollection';

Meteor.methods({
  'loanreq.insert'(loanreq) {

    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    LoanCollection.insert({
      loanreq,
      createdAt: new Date(),
      userId: this.userId,
    });
  }
});
