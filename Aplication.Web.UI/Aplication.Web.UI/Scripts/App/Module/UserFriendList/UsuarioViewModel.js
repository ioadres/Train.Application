(function () {
    'use strict';
    CoreJs.register({
        module: "app.core.framework.module.userfriendlist.UsuarioViewModel",
        collaborators: {
            UserUlComponent: "app.core.framework.components.UserUlComponent",
            service: "app.core.framework.module.userfriendlist.UsuarioService",
        },
        definition: execute
    });

    function execute() {
        var self = this;
        var _collaborators = self.collaborators;
        function UsuarioViewModel() {
            var service = _collaborators.service;
            _collaborators.UserUlComponent.definition(service.definition());
        }

        return UsuarioViewModel();
    }


}());
