const CSSTransitionGroup = React.addons.CSSTransitionGroup;
const INTERVAL = 2000;

const AnimateDemo = React.createClass({
    getInitialState() {
        return {current: 0};
    },
    componentDidMount() {
        this.interval = setInterval(this.tick, INTERVAL);
    },
    componentWillUnmount() {
        clearInterval(this.interval);
    },
    tick() {
        this.setState({
            current: this.state.current + 1
        });
    },
    render() {
        const children = [];
        let pos = 0;
        const colors = ['red', 'gray', 'blue'];
        for (let i = this.state.current; i < this.state.current + colors.length; i++) {
            const style = {
                left: pos * 128,
                background: colors[i % colors.length]
            };
            pos++;
            children.push(
                <div key={i} className="animateItem" style={style}>{i}</div>
            );
        }
        return (
            <CSSTransitionGroup className="animateExample" transitionEnterTimeout={250} transitionLeaveTimeout={250} transitionName="example">
                {children}
            </CSSTransitionGroup>
        );
    }
});

ReactDOM.render(
    <AnimateDemo/>, document.getElementById('container'));