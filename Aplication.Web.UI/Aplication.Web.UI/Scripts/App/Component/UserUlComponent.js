(function e(t, n, r) { function s(o, u) { if (!n[o]) { if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw f.code = "MODULE_NOT_FOUND", f } var l = n[o] = { exports: {} }; t[o][0].call(l.exports, function (e) { var n = t[o][1][e]; return s(n ? n : e) }, l, l.exports, e, t, n, r) } return n[o].exports } var i = typeof require == "function" && require; for (var o = 0; o < r.length; o++) s(r[o]); return s })({
    1: [function (require, module, exports) {
        "use strict";

        (function () {
            'use strict';

            app.core.framework.register({
                module: "app.core.framework.components.UserUlComponent",
                collaborators: {
                    FriendComponent: "app.core.framework.components.FriendComponent"
                },
                definition: execute
            });

            function execute(service) {

                debugger;
                var self = this;
                var uid = require('uid');
                var FriendComponent = self.collaborators.FriendComponent.definition();

                var UserUlComponent = React.createClass({
                    displayName: "UserUlComponent",

                    getInitialState: function getInitialState() {
                        return { data: [] };
                    },

                    handleClick: function handleClick(i) {
                        var elements = this.state.data;
                        elements.push({ text: this.state.data[i].text });
                        this.setState(elements);
                    },

                    render: function render() {
                        var commentNodes = this.state.data.map(function (item, i) {
                            return React.createElement(FriendComponent, { key: uid(7), text: item.text, onClick: this.handleClick.bind(this, i) });
                        }, this);

                        return React.createElement(
                          "div",
                          { className: "commentList" },
                          commentNodes
                        );
                    },

                    componentWillMount: function componentWillMount() {
                        this.state.data = service.getData();
                    },
                    componentDieMount: function componentDieMount() { }

                });

                ReactDOM.render(React.createElement(UserUlComponent, null), document.getElementById('content'));

                return UserUlComponent;
            }
        })();

    }, { "uid": 2 }], 2: [function (require, module, exports) {
        /**
         * Export `uid`
         */

        module.exports = uid;

        /**
         * Create a `uid`
         *
         * @param {String} len
         * @return {String} uid
         */

        function uid(len) {
            len = len || 7;
            return Math.random().toString(35).substr(2, len);
        }

    }, {}]
}, {}, [1]);