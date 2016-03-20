﻿(function () {
    'use strict';
    
    var framework = app.core.framework;
    framework.scriptsPath = {};

    initialize(framework);


    function initialize(framework) {
        
        var scriptManager = new ScriptManager(framework);        
        var moduleManager = new ModuleManger(scriptManager);
        framework.register = moduleManager.register;

        var initCoreComponents = new InitCoreComponents(scriptManager);

        initCoreComponents.init();
    };

    function ModuleManger(scriptManager) {
        var self = this;

        self.register = function (params) {
            //Errors
            self.errorContorl(params);
            self.loadModule(params);
        }

        self.errorContorl = function errorControl(module) { 
            if (module['module'] == undefined) throw ("Error: Module undefined or not exist");
            if (module['definition'] == undefined && module['initializer'] == undefined && module['path'] == undefined) {
                throw ("ERROR: register module : " + module['module']);
            }            
        };

        self.loadModule = function loadModule(module) {
            
            // LoadModule
            var split = module['module'].split('.');
            var parent = window;
            var current = '';
            var length = split.length;

            for (var i = 0; i < length; i++) {
                current = split[i];
                parent[current] = parent[current] || {};
                parent = parent[current];
            }

            // Init
            if (module['collaborators'] != undefined) self.loadCollaborators(parent, module['collaborators']);
            if (module['definition'] != undefined) self.loadDefinition(parent, module['definition']);
            if (module['initializer'] != undefined) self.loadInitializer(module['initializer']);
            if (module['path'] != undefined) scriptManager.loadPath(module['path']);
        };

        self.loadCollaborators = function loadCollaborators(currentModule, arg) {
            for (var item in arg) {
                var split = arg[item].split('.');
                var parent = window;
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

        self.loadDefinition = function loadDefinition(currentModule,definition) {
            currentModule['definition'] = definition.bind(currentModule);
        };

        self.loadInitializer = function loadInitializer(initializer) {
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

        return self;        
    };

    function ScriptManager(framework) {
        var self = this;       

        self.loadPath = function loadPath(path) {
            var script = document.currentScript;
            var fullUrl = script.src;
            var fullUrl = fullUrl.split('/').pop();

            if (framework.scriptsPath[fullUrl] == undefined) {
                framework.scriptsPath[fullUrl] = [];
                framework.scriptsPath[fullUrl].index = 0;
            }
          
                //TODO: comprobar que no haya sido ya cargado anteriormente ya el script
                framework.scriptsPath[fullUrl][framework.scriptsPath[fullUrl].index] = path;
                framework.scriptsPath[fullUrl].index++;
            
        }
        
        self.checkIfPathIsLoad = function(path, module) {
            for(var i = 0; i < framework.scriptsPath[module].index; i++) {
                if (framework.scriptsPath[module][i] === path) return true;
            }
            return false;
        }

        self.registerJs = function (path, filesJs, index) {
            var script = document.createElement('script');
            script.src = path;
            script.type = "text/javascript";
            script.onload = function () {
                if (filesJs[index] != undefined) self.registerJs(filesJs[index], filesJs, index + 1)
            }
            document.getElementsByTagName('head')[0].appendChild(script);
        }

        self.loadScript = function(scriptName) {
            var pathScript = framework.scriptsPath[scriptName][0];
            self.registerJs(pathScript, framework.scriptsPath[scriptName], 0);
        }

        return self;
    };

    function InitCoreComponents(scriptManager) {

        var self = this;

        self.init = function () {
            var paths = [];
            paths[0] = "http://localhost:8080/Scripts/App/Module/References/Core.UserFriendList.js";

            for (var index = 0; index < paths.length; index++) {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.src = paths[index];
                document.getElementsByTagName('head')[0].appendChild(script);

                script.onload = function () {
                    var scriptName = paths[0].split('/').pop();
                    scriptManager.loadScript(scriptName);
                };
            }
        };

        return self;

    };

    function Promise() {
        var self = this;
        var resolved = false, callback, args;

        function execute() {
            callback.apply({}, args);
        }

        self.then = function (clback) {
            callback = clback;
            if (resolved) {
                execute();
            }
        };
        self.done = function () {
            args = arguments;
            resolved = true;
            if (callback) {
                execute();
            }
        };
    };

}());

