'use strict';

(function (React, render, fetch) {
    var App = React.createClass({
        displayName: 'App',
        getInitialState: function getInitialState() {
            return { urls: [] };
        },
        componentDidMount: function componentDidMount() {
            var _this = this;

            fetch('/urls.json', '', 'GET', 2000, function (json) {
                _this.setState({ urls: json });
            }, function (err) {
                _this.setState({ urls: [err.toString()] });
            });
        },
        render: function render() {
            var errStyle = {
                color: 'red'
            };
            var indexes = this.state.urls.map(function (url) {
                return url.name ? React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'a',
                        { href: url.href, target: '_blank' },
                        url.name
                    )
                ) : React.createElement(
                    'p',
                    { style: errStyle },
                    url
                );
            });
            return React.createElement(
                'ul',
                null,
                indexes
            );
        }
    });
    render(React.createElement(App, null), document.querySelector('#container'));
})(window.React, window.ReactDOM.render, window.fetch);