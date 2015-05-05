define(["require", "exports"], function(require, exports) {
    var AnotherClass = (function () {
        function AnotherClass() {
        }
        AnotherClass.prototype.sayHi = function () {
            console.log('Hi there!');
        };
        return AnotherClass;
    })();

    
    return AnotherClass;
});
