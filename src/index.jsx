(function(React, render){
    const urls = [
        {
            href: '/examples/basic/index.html',
            name: 'basic'
        }
    ];
    const App = React.createClass({
        render() {
            var indexes = this.props.urls.map((url) => {
                return (<li><a href={url.href} target='_blank'>{url.name}</a></li>);
            });
            return (<ul>{indexes}</ul>);
        }
    });
    render(<App urls={urls}/>, document.querySelector('#container'));
})(window.React, window.ReactDom.render);