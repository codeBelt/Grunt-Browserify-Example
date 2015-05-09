'use strict';

var $ = require('jquery');
var App = require('./App');

$(document).ready(function () {
    window.app = new App();
    window.app.appendTo('body');    // Need to specify what area our code has control over.
                                    // The App.js class extends Stage which has the appendTo method.
                                    // Note: On typical website you may want to set it as 'body' do you have control over the whole page.
});
