/**
 * jQuery Mobile React Example
 *
 * Main application script.
 * For variety, this example is written in 100% JSHint-compliant JavaScript, not in JSX.
 *
 * Component structure:
 *
 * - App
 *   |-- JQueryMobilePage (one)
 *   |   |-- JQueryMobileHeader
 *   |   |-- JQueryMobileContent
 *   |   |   |-- PageOneContent
 *   |   |       |-- JQueryMobileButton
 *   |   |-- JQueryMobileFooter
 *   |-- JQueryMobilePage (two)
 *   |   |-- JQueryMobileHeader
 *   |   |-- JQueryMobileContent
 *   |   |   |-- PageTwoContent
 *   |   |       |-- JQueryMobileButton
 *   |   |-- JQueryMobileFooter
 *   |-- JQueryMobilePage (popup)
 *       |-- JQueryMobileHeader
 *       |-- JQueryMobileContent
 *       |   |-- PagePopUpContent
 *       |       |-- JQueryMobileButton
 *       |-- JQueryMobileFooter
 */

/* global document, React */

/** Main application component. */

const App = React.createFactory(React.createClass({
    displayName: 'App',
    render() {
        return (
            <div className='app'>
                <JQueryMobilePage id='one'>
                    <PageOneContent/>
                </JQueryMobilePage>
                <JQueryMobilePage id='two'>
                    <PageOneContent/>
                </JQueryMobilePage>
                <JQueryMobilePage id='popup' headerTheme='b'>
                    <PageOneContent/>
                </JQueryMobilePage>
            </div>
        );
    }
}));

/** jQuery Mobile button component. */
const JQueryMobileButton = React.createFactory(React.createClass({
    displayName: 'JQueryMobileButton',
    getDefaultProps() {
        return {className: 'ui-btn ui-shadow ui-corner-all'};
    },
    render() {
        return (
            <p><a {...this.props}>{this.props.children}</a></p>
        )
        // return React.DOM.p(null, React.DOM.a(this.props, this.props.children));
    }
}));

/** jQuery Mobile page content component. */
const JQueryMobileContent = React.createFactory(React.createClass({
    displayName: 'JQueryMobileContent',
    render() {
        return (
            <div role='main' className='ui-content'>
                {this.props.children}
            </div>
        );
        // return React.DOM.div({
        //     role: 'main',
        //     className: 'ui-content'
        // }, this.props.children);
    }
}));

/** jQuery Mobile footer component. */
const JQueryMobileFooter = React.createFactory(React.createClass({
    displayName: 'JQueryMobileFooter',
    render() {
        return (
            <div data-role='footer'>
                <h4>Page footer</h4>
            </div>
        );
    }
}));

/** jQuery Mobile header component. */
const JQueryMobileHeader = React.createFactory(React.createClass({
    displayName: 'JQueryMobileHeader',
    render() {
        return (
            <div data-role='header' data-theme={this.props.headerTheme}>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}));

/** jQuery Mobile page component. */
const JQueryMobilePage = React.createFactory(React.createClass({
    displayName: 'JQueryMobilePage',
    getDefaultProps() {
        return {'data-role': 'page', 'data-theme': 'a', 'headerTheme': 'a'};
    },
    render() {
        return (
            <div {...this.props}>
                <JQueryMobileHeader title={`Page ${this.props.id}`} headerTheme={this.props.headerTheme} />
                <JQueryMobileContent>{this.props.children}</JQueryMobileContent>
                <JQueryMobileFooter />
            </div>
        )
        // const props = {};
        // for(let key in this.props){
        //     props[key] = this.props[key];
        // }
        // return React.DOM.div(props,
        //     JQueryMobileHeader({
        //         title: 'Page ' + this.props.id,
        //         headerTheme: this.props.headerTheme
        //     }),
        //     JQueryMobileContent(null, this.props.children),
        //     JQueryMobileFooter(null)
        // );
    }
}));

/** Application page one component. */
const PageOneContent = React.createFactory(React.createClass({
    displayName: 'PageOneContent',
    render() {
        return (
            <div>
                <h2>One</h2>
                <p>I have an
                    <code>id</code>
                    of &quot;one&quot; on my page container. I&apos;m first in the source order so I&apos;m shown when the page loads.</p>
                <p>This is a multi-page boilerplate template that you can copy to build your first jQuery Mobile page. This template contains multiple &quot;page&quot; containers inside, unlike a single page template that has just one page within it.</p>
                <p>Just view the source and copy the code to get started. All the CSS and JS is linked to the jQuery CDN versions so this is super easy to set up. Remember to include a meta viewport tag in the head to set the zoom level.</p>
                <p>You link to internal pages by referring to the
                    <code>id</code>
                    of the page you want to show. For example, to
                    <a href="two">link</a>
                    to the page with an
                    <code>id</code>
                    of &quot;two&quot;, my link would have a
                    <code>href=&quot;#two&quot;</code>
                    in the code.</p>
                <h3>Show internal pages:</h3>
                <JQueryMobileButton href='#two'>Show page &quot;two&quot;</JQueryMobileButton>
                <JQueryMobileButton href='#popup' data-rel='dialog' data-transition='pop'>Show page &quot;popup&quot; (as a dialog)</JQueryMobileButton>
            </div>
        );
    }
}));

/** Application page two component. */
const PageTwoContent = React.createFactory(React.createClass({
    displayName: 'PageTwoContent',
    render() {
        return (
            <div>
                <h2>Two</h2>
                <p>I have an id of &quot;two&quot; on my page container. I&apos; the second page container in this multi-page template.</p>
                <p>Notice that the theme is different for this page because we&apos;ve added a few
                    <code>data-theme</code>
                    swatch assigments here to show off how flexible it is. You can add any content or widget to these pages, but we&apos;re keeping these simple.</p>
                <JQueryMobileButton href='#one' data-direction='reverse' calssName='ui-btn ui-shadow ui-corner-all ui-btn-b'>Back to page &quot;one&quot;</JQueryMobileButton>
            </div>
        );
    }
}));

/** Application popup page component. */
const PagePopUpContent = React.createFactory(React.createClass({
    displayName: 'PagePopUpContent',
    render() {
        return (
            <div>
                <h2>Popup</h2>
                <p>I have an id of "popup" on my page container and only look like a dialog because the link to me had a
                    <code>data-rel=&quot;dialog&quot;</code>
                    attribute which gives me this inset look and a
                    <code>data-transition=&quot;pop&quot;</code>
                    attribute to change the transition to pop. Without this, I&apos;d be styled as a normal page.</p>
                <JQueryMobileButton href='one' data-rel='back' className='ui-btn ui-shadow ui-corner-all ui-btn-inline ui-icon-back ui-btn-icon-left'>Back to page &quot;one&quot;</JQueryMobileButton>
            </div>
        );
    }
}));

// Render application.
ReactDOM.render(
    <App/>, document.getElementById('content'));
