((React, render) => {
    const ExampleApplication = React.createClass({
        render() {
            const elapsed = Math.round(this.props.elapsed / 100);
            const seconds = elapsed / 10 + (elapsed % 10
                ? ''
                : '.0');
            const message = `React has been successfully running for ${seconds} seconds.`;
            return <p>{message}</p>;
        }
    });
    const start = new Date().getTime();
    setInterval(() => {
        render(
            <ExampleApplication elapsed={new Date().getTime() - start}/>, document.getElementById('container'));
    }, 50);
})(React, ReactDOM.render);
