'use strict';

var AnotherClass = (function () {

    function AnotherClass() {
    }

    AnotherClass.prototype.sayHi = function () {
        console.log('Hi there!');
    };

    return AnotherClass;
})();

module.exports = AnotherClass;
