import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

// * Can also use other automatic login packages (e.g. Facebook) 

export default class AccountsUIWrapper extends Component {
    componentDidMount() {
        // User Meteor Blaze to render login buttons
        this.view = Blaze.render(Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container));
    }
    componentWillUnmount() {
        // Clean up Blaze view
        Blaze.remove(this.view);
    }
    render() {
        // Just render a place holder container that will be filled in 
        return <span ref="container" />;
    }
}