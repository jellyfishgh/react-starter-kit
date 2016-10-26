'use strict';

(function (React, render) {
    var App = React.createClass({
        displayName: 'App',
        render: function render() {
            return React.createElement(
                'div',
                { className: 'app' },
                React.createElement(
                    JQueryMobilePage,
                    { id: 'one' },
                    React.createElement(PageOneContent, null)
                ),
                React.createElement(
                    JQueryMobilePage,
                    { id: 'two' },
                    React.createElement(PageTwoContent, null)
                ),
                React.createElement(
                    JQueryMobilePage,
                    { id: 'popup', headerTheme: 'b' },
                    React.createElement(PagePopUpContent, null)
                )
            );
        }
    });

    /** jQuery Mobile button component. */
    var JQueryMobileButton = React.createClass({
        displayName: 'JQueryMobileButton',
        getDefaultProps: function getDefaultProps() {
            return { className: 'ui-btn ui-shadow ui-corner-all' };
        },
        render: function render() {
            return React.createElement(
                'p',
                null,
                React.createElement(
                    'a',
                    this.props,
                    this.props.children
                )
            );
        }
    });

    /** jQuery Mobile page content component. */
    var JQueryMobileContent = React.createClass({
        displayName: 'JQueryMobileContent',
        render: function render() {
            return React.createElement(
                'div',
                { role: 'main', className: 'ui-content' },
                this.props.children
            );
        }
    });

    /** jQuery Mobile footer component. */
    var JQueryMobileFooter = React.createClass({
        displayName: 'JQueryMobileFooter',
        render: function render() {
            return React.createElement(
                'div',
                { 'data-role': 'footer' },
                React.createElement(
                    'h4',
                    null,
                    'Page footer'
                )
            );
        }
    });

    /** jQuery Mobile header component. */
    var JQueryMobileHeader = React.createClass({
        displayName: 'JQueryMobileHeader',
        render: function render() {
            return React.createElement(
                'div',
                { 'data-role': 'header', 'data-theme': this.props.headerTheme },
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                )
            );
        }
    });

    /** jQuery Mobile page component. */
    var JQueryMobilePage = React.createClass({
        displayName: 'JQueryMobilePage',
        getDefaultProps: function getDefaultProps() {
            return { 'data-role': 'page', 'data-theme': 'a', 'headerTheme': 'a' };
        },
        render: function render() {
            // const props = {};
            // for (let key in this.props) {
            //     props[key] = this.props[key];
            // }
            return React.createElement(
                'div',
                this.props,
                React.createElement(JQueryMobileHeader, { title: 'Page ' + this.props.id, headerTheme: this.props.headerTheme }),
                React.createElement(
                    JQueryMobileContent,
                    null,
                    this.props.children
                ),
                React.createElement(JQueryMobileFooter, null)
            );
        }
    });

    /** Application page one component. */
    var PageOneContent = React.createClass({
        displayName: 'PageOneContent',
        render: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'One'
                ),
                React.createElement(
                    'p',
                    null,
                    'I have an',
                    React.createElement(
                        'code',
                        null,
                        'id'
                    ),
                    'of "one" on my page container. I\'m first in the source order so I\'m shown when the page loads.'
                ),
                React.createElement(
                    'p',
                    null,
                    'This is a multi-page boilerplate template that you can copy to build your first jQuery Mobile page. This template contains multiple "page" containers inside, unlike a single page template that has just one page within it.'
                ),
                React.createElement(
                    'p',
                    null,
                    'Just view the source and copy the code to get started. All the CSS and JS is linked to the jQuery CDN versions so this is super easy to set up. Remember to include a meta viewport tag in the head to set the zoom level.'
                ),
                React.createElement(
                    'p',
                    null,
                    'You link to internal pages by referring to the',
                    React.createElement(
                        'code',
                        null,
                        'id'
                    ),
                    'of the page you want to show. For example, to',
                    React.createElement(
                        'a',
                        { href: 'two' },
                        'link'
                    ),
                    'to the page with an',
                    React.createElement(
                        'code',
                        null,
                        'id'
                    ),
                    'of "two", my link would have a',
                    React.createElement(
                        'code',
                        null,
                        'href="#two"'
                    ),
                    'in the code.'
                ),
                React.createElement(
                    'h3',
                    null,
                    'Show internal pages:'
                ),
                React.createElement(
                    JQueryMobileButton,
                    { href: '#two' },
                    'Show page "two"'
                ),
                React.createElement(
                    JQueryMobileButton,
                    { href: '#popup', 'data-rel': 'dialog', 'data-transition': 'pop' },
                    'Show page "popup" (as a dialog)'
                )
            );
        }
    });

    /** Application page two component. */
    var PageTwoContent = React.createClass({
        displayName: 'PageTwoContent',
        render: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'Two'
                ),
                React.createElement(
                    'p',
                    null,
                    'I have an id of "two" on my page container. I\' the second page container in this multi-page template.'
                ),
                React.createElement(
                    'p',
                    null,
                    'Notice that the theme is different for this page because we\'ve added a few',
                    React.createElement(
                        'code',
                        null,
                        'data-theme'
                    ),
                    'swatch assigments here to show off how flexible it is. You can add any content or widget to these pages, but we\'re keeping these simple.'
                ),
                React.createElement(
                    JQueryMobileButton,
                    { href: '#one', 'data-direction': 'reverse', className: 'ui-btn ui-shadow ui-corner-all ui-btn-b' },
                    'Back to page "one"'
                )
            );
        }
    });

    /** Application popup page component. */
    var PagePopUpContent = React.createClass({
        displayName: 'PagePopUpContent',
        render: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'Popup'
                ),
                React.createElement(
                    'p',
                    null,
                    'I have an id of "popup" on my page container and only look like a dialog because the link to me had a',
                    React.createElement(
                        'code',
                        null,
                        'data-rel="dialog"'
                    ),
                    'attribute which gives me this inset look and a',
                    React.createElement(
                        'code',
                        null,
                        'data-transition="pop"'
                    ),
                    'attribute to change the transition to pop. Without this, I\'d be styled as a normal page.'
                ),
                React.createElement(
                    JQueryMobileButton,
                    { href: '#one', 'data-rel': 'back', className: 'ui-btn ui-shadow ui-corner-all ui-btn-inline ui-icon-back ui-btn-icon-left' },
                    'Back to page "one"'
                )
            );
        }
    });

    // Render application.
    render(React.createElement(App, null), document.getElementById('content'));
})(window.React, window.ReactDOM.render);