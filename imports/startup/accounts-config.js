import { Account } from 'meteor/accounts-base';

// * Default is to use emails to signup 
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});