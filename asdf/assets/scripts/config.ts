/**
 * Application configuration declaration.
 */
require.config({

    baseUrl: 'assets/scripts/',

    paths: {
        //main libraries
        jquery: '../vendor/jquery/jquery-1.9.1',
        lodash: '../vendor/lodash/lodash',

        //shortcut paths
        templates: '../templates',
        data: '../data',

        //require plugins
        text: '../vendor/require/text',
        tpl: '../vendor/require/tpl',
        json: '../vendor/require/json',
        hbs: '../vendor/require-handlebars-plugin/hbs'
    },

    shim: {
        jquery: {
            exports: '$'
        },
        lodash: {
            exports: '_'
        },
        Handlebars: {
            exports: 'Handlebars'
        }
    }
});