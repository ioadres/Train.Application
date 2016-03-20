(function() {
    'use strict';
    CoreJs.register({
        module: "app.core.framework.components.UserUlComponent",
        collaborators: {
            FriendComponent : "app.core.framework.components.FriendComponent",
        },
        definition : execute
    });



    function execute(service) {

        var self = this;
        var FriendComponent = self.collaborators.FriendComponent.definition();

        var UserUlComponent = React.createClass({
            getInitialState: function() {
                return { data: [] };
            },

            handleClick : function(i) {
                var elements  = this.state.data;
                elements.push({text: this.state.data[i].text});
                this.setState(elements);
            },

            render: function() {
                var commentNodes = this.state.data.map(function(item,i) {
                    return (<FriendComponent  key={uuid.v1()} text={item.text} onClick={this.handleClick.bind(this,i)}></FriendComponent>)
                }, this);
                return ( <div className="commentList">{commentNodes}</div> );
            },

            componentWillMount: function() {
                this.state.data = service.getData();

            },
            componentDieMount: function() {}

            });


        ReactDOM.render(<UserUlComponent />,  document.getElementById('content'));

        return UserUlComponent;

   }
}());
