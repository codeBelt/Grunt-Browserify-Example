'use strict';

// Imports
var Extend = require('structurejs/util/Extend');
var BaseView = require('./view/BaseView');
var AnotherClass = require('./view/AnotherClass');
var TemplateFactory = require('./util/TemplateFactory');

/**
 * TODO: YUIDoc_comment
 *
 * @class App
 * @extends Base
 * @constructor
 **/
var App = (function () {

    var _super = Extend(App, BaseView);

    function App() {
        _super.call(this);

        /**
         * TODO: YUIDoc_comment
         *
         * @property _title
         * @type {string}
         * @private
         */
        this._title = 'Grunt Browserify Example';

        /**
         * TODO: YUIDoc_comment
         *
         * @property _anotherClass
         * @type {AnotherClass}
         * @private
         */
        this._anotherClass = null;
    }

    /**
     * @overridden BaseView.create
     */
    App.prototype.create = function () {
        var template = TemplateFactory.create('templates/topbar/TopNavigationTemplate');
        this.addChild(template);

        template = TemplateFactory.create('templates/login/LoginTemplate', { title: this._title });
        this.addChild(template);

        this._anotherClass = new AnotherClass();
        this._anotherClass.sayHi();
    };

    return App;
})();

module.exports = App;
