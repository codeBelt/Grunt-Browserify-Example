define(["require", "exports"], function(require, exports) {
    var TemplateFactory = (function () {
        function TemplateFactory() {
        }
        TemplateFactory.create = function (templatePath, data) {
            if (typeof data === "undefined") { data = null; }
            var templateFunction = TemplateFactory.TEMPLATES[templatePath];
            var template = templateFunction(data);

            return template;
        };
        TemplateFactory.CLASS_NAME = 'TemplateFactory';

        TemplateFactory.TEMPLATES = null;
        return TemplateFactory;
    })();

    
    return TemplateFactory;
});
