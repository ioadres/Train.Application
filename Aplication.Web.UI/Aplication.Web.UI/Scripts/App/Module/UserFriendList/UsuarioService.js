(function () {
    'use strict';
    app.core.framework.register({
        module: "app.core.framework.module.userfriendlist.UsuarioService",
        definition: execute
    });

    function execute() {
        var self = this;

        var service = function UsuarioService() { }
        service.getData = function () {
            return [{ text: "This is one comment" },
                    { text: "This is *another* comment" }
            ];
        }

        return service;
    }


}());
