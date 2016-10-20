'use strict';

(function (react, render) {
    var Counter = React.createClass({
        displayName: 'Counter',
        getInitialState: function getInitialState() {
            return { count: 0 };
        },
        handleClick: function handleClick() {
            this.setState({
                count: this.state.count + 1
            });
        },
        render: function render() {
            return React.createElement(
                'button',
                { onClick: this.handleClick },
                'Click me! Number of clicks: ',
                this.state.count
            );
        }
    });
    render(React.createElement(Counter, null), document.getElementById('container'));
})(window.React, window.ReactDOM.render);