(function () {
    'use strict';
    
    app.core.framework.register({
        module: "app.core.framework.components.FriendComponent",
        path: "/Scripts/App/Component/FriendComponent.jsx"
    });

    app.core.framework.register({
        module: "app.core.framework.components.UserUlComponent",
        path: "/Scripts/App/Component/UserUlComponent.jsx"
    });

    app.core.framework.register({
        module: "app.core.framework.module.userfriendlist.UsuarioService",
        path: "/Scripts/App/Module/UserFriendList/UsuarioService.js"
    });

    app.core.framework.register({
        module: "app.core.framework.module.userfriendlist.UsuarioViewModel",
        path: "/Scripts/App/Module/UserFriendList/UsuarioViewModel.js"
    });

    app.core.framework.register({
        module: "app.core.framework.module.userfriendlist.app",
        path: "/Scripts/App/Module/UserFriendList/App.js"
    });

    app.core.framework.register({
        module: "app.core.framework.module.userfriendlist.bootstrap",
        path: "/Scripts/App/Module/UserFriendList/Bootstrap.js"
    });

})();
