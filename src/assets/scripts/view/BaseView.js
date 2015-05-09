var $ = require('jquery');

/**
 * TODO: YUIDoc_comment
 *
 * @class BaseView
 * @constructor
 **/
var BaseView = (function () {

    function BaseView() {

        /**
         * TODO: YUIDoc_comment
         *
         * @property _parent
         * @type {jQuery}
         * @private
         */
        this._parent = null;
    }

    /**
     * TODO: YUIDoc_comment
     *
     * @method create
     * @public
     */
    BaseView.prototype.create = function () {
        throw new TypeError('The create method is meant to be overridden');
    };

    /**
     * TODO: YUIDoc_comment
     *
     * @method appendTo
     * @param selector {string}
     * @public
     */
    BaseView.prototype.appendTo = function (selector) {
        this._parent = $(selector);
        this.create();
    };

    /**
     * TODO: YUIDoc_comment
     *
     * @method addChild
     * @param template {string}
     * @public
     */
    BaseView.prototype.addChild = function (template) {
        this._parent.append(template);
    };

    return BaseView;
})();

module.exports = BaseView;
