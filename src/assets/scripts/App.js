'use strict';

// Imports
var Extend = require('structurejs/util/Extend');
var Base = require('./view/Base');

/**
 * TODO: YUIDoc_comment
 *
 * @class App
 * @extends Base
 * @constructor
 **/
var App = (function () {

    var _super = Extend(App, Base);

    function App() {
        _super.call(this);

        this._title = 'TypeScript AMD Boilerplate';
        this._anotherClass = null;
    }

    App.prototype.create = function () {
        //var template = TopNavigationTemplate();
        //this.addChild(template);
        //
        //template = LoginTemplate({ title: this._title });
        //this.addChild(template);
        //
        //this._anotherClass = new AnotherClass();
        //this._anotherClass.sayHi();
        //
        //console.log("_", _);
    };

    return App;
})();

module.exports = App;
