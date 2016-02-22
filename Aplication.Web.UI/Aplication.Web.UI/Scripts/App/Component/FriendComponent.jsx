(function() {
    'use strict';
    app.core.framework.register({
        module: "app.core.framework.components.FriendComponent",
        definition : execute
    });

    function execute() {

        var self = this;

        var FriendComponent = React.createClass({
            render: function() {
                return (
                  <li onClick={this.props.onClick}>{this.props.text}</li>
            );
            }
        });

    return FriendComponent;

    }
}());
