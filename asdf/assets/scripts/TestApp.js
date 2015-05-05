var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "view/Base", "view/AnotherClass", "lodash", "hbs!templates/topbar/TopNavigationTemplate", "hbs!templates/login/LoginTemplate"], function(require, exports, Base, AnotherClass, _) {
    
    var TopNavigationTemplate = require('hbs!templates/topbar/TopNavigationTemplate');
    var LoginTemplate = require('hbs!templates/login/LoginTemplate');

    var TestApp = (function (_super) {
        __extends(TestApp, _super);
        function TestApp() {
            _super.call(this);
            this._title = 'TypeScript AMD Boilerplate';
            this._anotherClass = null;
        }
        TestApp.prototype.createChildren = function () {
            var template = TopNavigationTemplate();
            this.addChild(template);

            template = LoginTemplate({ title: this._title });
            this.addChild(template);

            this._anotherClass = new AnotherClass();
            this._anotherClass.sayHi();

            console.log("_", _);
        };
        return TestApp;
    })(Base);

    
    return TestApp;
});
