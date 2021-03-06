/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';
import 'animate.css/animate.min.css';
require('velocity-animate');
require('./bootstrap');
require('jquery');
require('popper.js');

require ('./skills.js');
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/App.jsx');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


if (document.getElementById('App')) {
    ReactDOM.render(
<App />, document.getElementById('App'));
}