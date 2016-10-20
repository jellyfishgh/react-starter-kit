// Define WebComponent
var proto = Object.create(HTMLElement.prototype, {
    attachedCallback: {
        value() {
            const mountPoint = document.createElement('span');
            this.createShadowRoot().appendChild(mountPoint);
            const name = this.getAttribute('name');
            const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
            ReactDOM.render(
                <a href={url}>{name}</a>, mountPoint);
        }
    }
});
document.registerElement('x-search', {prototype: proto});

// Define React Component
class HelloMessage extends React.Component {
    render() {
        return (
            <div>Hello <x-search name={this.props.name}/> !</div>
        );
    }
}

// Mount React Component (which uses WebComponent which uses React)
ReactDOM.render(
    <HelloMessage name="Jim Sproch"/>, document.getElementById('container'));