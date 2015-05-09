'use strict';

// Imports
var templates = require('./src/assets/scripts/templates.js');

var TemplateFactory = (function () {

    TemplateFactory.TEMPLATES = templates.JST;

    function TemplateFactory() {
    }

    TemplateFactory.create = function (templatePath, data) {
        if (typeof data === "undefined") { data = null; }

        var templateFunction = TemplateFactory.TEMPLATES[templatePath];
        var template = templateFunction(data);

        return template;
    };

    return TemplateFactory;
})();


module.exports = TemplateFactory;
