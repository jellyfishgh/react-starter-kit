(function(React, render, fetch) {
    const App = React.createClass({
        getInitialState() {
            return {urls: []}
        },
        componentDidMount() {
            fetch('/urls.json', '', 'GET', 2000, (json) => {
                this.setState({urls: json});
            }, (err) => {
                this.setState({urls: [err.toString()]});
            });
        },
        render() {
            const errStyle = {
                color: 'red'
            };
            var indexes = this.state.urls.map((url) => {
                return url.name ? (
                    <li>
                        <a href={url.href} target='_blank'>{url.name}</a>
                    </li>
                ) : <p style={errStyle}>{url}</p>;
            });
            return (
                <ul>
                    {indexes}
                </ul>
            );
        }
    });
    render(
        <App/>, document.querySelector('#container'));
})(window.React, window.ReactDOM.render, window.fetch);