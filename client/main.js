import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});

// Type in command 'meteor npm install --save react react-dom' to add React view packages
// Type in command 'meteor remove blaze-html-templates' to remove Blaze .html templates
// Type in command 'meteor add static-html' to enable static .html templates
// Type in command 'meteor remove insecure' to remove this package that allows the client to directly edit the database