((react, render) => {
    const Counter = React.createClass({
        getInitialState() {
            return {count: 0};
        },
        handleClick() {
            this.setState({
                count: this.state.count + 1
            });
        },
        render() {
            return (
                <button onClick={this.handleClick}>
                    Click me! Number of clicks: {this.state.count}
                </button>
            );
        }
    });
    render(
        <Counter/>, document.getElementById('container'));
})(window.React, window.ReactDOM.render);