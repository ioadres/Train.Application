var app = app || {};
app.core = app.core || {};

(function () {
    'use strict';
    app.core.framework = app.core.framework || {};
    app.core.framework.utilities = app.core.framework.utilities || {};

    var self = app.core.framework.utilities;

    self.getFileExtension = function (filename) {
        return filename.split('.').pop();
    }

    self.isReactFile = function (filename) {
        var extension = self.getFileExtension(filename);
        if (extension == 'jsx') return true;
        return false;
    }

    self.convertPathReactToJs = function (filename) {
        return filename.substr(0, filename.lastIndexOf(".")) + ".jsx";
    }

    self.registerJs = function (path, filesJs, index) {
        var script = document.createElement('script');
        script.src = path;
        
        script.onload = function () {
            if (filesJs[index] != undefined) self.registerJs(filesJs[index], filesJs, index + 1)
        }
        document.getElementsByTagName('head')[0].appendChild(script);
    }

})(app.core);
