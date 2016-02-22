var app = app || {};
app.core = app.core || {};

(function () {
    'use strict';

    app.core.framework = app.core.framework || {};
    var self = app.core.framework;
    self.temp = self.temp || {};

    self.register = function (params, callback) {
        var currentModule = self;
        if (params['path'] != null) loadPath(params['path'], params['type']);
        if (params['module'] != null) loadModule(params['module']);
        if (params['collaborators'] != null) loadCollaborators(params['collaborators']);
        if (params['definition'] != null) loadDefinition(params['definition'], callback);
        if (params['initializer'] != null) loadInitializer(params['initializer']);


        function loadPath(path, type) {
            var script = document.currentScript;
            var fullUrl = script.src;
            var fullUrl = fullUrl.split('/').pop();

            if (self.temp[fullUrl] == undefined) {
                self.temp[fullUrl] = [];
                self.temp[fullUrl].index = 0;
            }

            if (self.utilities.isReactFile(path)) {
                path = self.utilities.convertPathReactToJs(path);
            }

            self.temp[fullUrl][self.temp[fullUrl].index] = path;
            self.temp[fullUrl].index++;

        }

        function loadModule(params) {
            var split = params.split('.');
            parent = window;
            var current = '';
            var length = split.length;

            for (var i = 0; i < length; i++) {
                current = split[i];
                parent[current] = parent[current] || {};
                parent = parent[current];
            }
            currentModule = parent;
        }

        function loadCollaborators(params) {
            for (var item in params) {
                var split = params[item].split('.');
                parent = window;
                var current = '';
                var length = split.length;

                for (var i = 0; i < length; i++) {
                    current = split[i];
                    parent[current] = parent[current] || {};
                    parent = parent[current];
                }

                currentModule['collaborators'] = currentModule['collaborators'] || {};
                var collaborators = currentModule['collaborators'];
                collaborators[item] = parent;
            }
        }

        function loadDefinition(definition, callback) {
            currentModule['definition'] = definition.bind(currentModule);
            if (callback != undefined) callback();
        }

        function loadInitializer(initializer) {
            var split = initializer.split('.');
            parent = window;
            var current = '';
            var length = split.length;

            for (var i = 0; i < length; i++) {
                current = split[i];
                parent[current] = parent[current] || {};
                parent = parent[current];
            }
            parent.definition();
        }

    }
}(app.core));



// initialize modules
(function () {
    'use strict';
    app.core.framework = app.core.framework || {};
    var self = app.core.framework;

    self.initCoreComponents = function () {

        var paths = [];
        paths[0] = "/Scripts/App/Module/References/Core.UserFriendList.js";

        for (var index = 0; index < paths.length; index++) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = paths[index];
            document.getElementsByTagName('head')[0].appendChild(script);

            script.onload = function () {
                var path = paths[0].split('/').pop();
                var pathScript = self.temp[path][0];
                self.utilities.registerJs(pathScript, self.temp[path], 0);
            };

        }

    }();


}(app.core));
