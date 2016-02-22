(function () {
    'use strict';
    app.core.framework.register({
        module: "app.core.framework.module.userfriendlist.app",
        collaborators: {
            viewModel: "app.core.framework.module.userfriendlist.UsuarioViewModel"
        },
        definition: execute
    });

    function execute() {
        var self = this;
        var collaborators = self.collaborators;
        var usuarioViewModel = collaborators.viewModel.definition();
    }
}());
