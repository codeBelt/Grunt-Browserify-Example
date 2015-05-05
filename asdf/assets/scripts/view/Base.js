define(["require", "exports", "jquery"], function(require, exports, $) {
    var Base = (function () {
        function Base() {
            this._parent = null;
        }
        Base.prototype.createChildren = function () {
        };

        Base.prototype.appendTo = function (selector) {
            this._parent = $(selector);
            this.createChildren();
        };

        Base.prototype.addChild = function (template) {
            this._parent.append(template);
        };
        return Base;
    })();

    
    return Base;
});
