'use strict';

var Base = (function () {

    function Base() {
        this._parent = null;
    }

    Base.prototype.create = function () {
        // This
    };

    Base.prototype.appendTo = function (selector) {
        this._parent = $(selector);
        this.create();
    };

    Base.prototype.addChild = function (template) {
        this._parent.append(template);
    };

    return Base;
})();
