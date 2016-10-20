'use strict';

var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var INTERVAL = 2000;

var AnimateDemo = React.createClass({
    displayName: 'AnimateDemo',
    getInitialState: function getInitialState() {
        return { current: 0 };
    },
    componentDidMount: function componentDidMount() {
        this.interval = setInterval(this.tick, INTERVAL);
    },
    componentWillUnmount: function componentWillUnmount() {
        clearInterval(this.interval);
    },
    tick: function tick() {
        this.setState({
            current: this.state.current + 1
        });
    },
    render: function render() {
        var children = [];
        var pos = 0;
        var colors = ['red', 'gray', 'blue'];
        for (var i = this.state.current; i < this.state.current + colors.length; i++) {
            var style = {
                left: pos * 128,
                background: colors[i % colors.length]
            };
            pos++;
            children.push(React.createElement(
                'div',
                { key: i, className: 'animateItem', style: style },
                i
            ));
        }
        return React.createElement(
            CSSTransitionGroup,
            { className: 'animateExample', transitionEnterTimeout: 250, transitionLeaveTimeout: 250, transitionName: 'example' },
            children
        );
    }
});

ReactDOM.render(React.createElement(AnimateDemo, null), document.getElementById('container'));