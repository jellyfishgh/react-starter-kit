$(document).ready(() => {
    // Simple pure-React component so we don't have to remember
    // Bootstrap's classes
    const BootstrapButton = React.createClass({
        render() {
            return (<a {...this.props} href="javascript:;" role="button" className={(this.props.className || '') + ' btn'}/>);
        }
    });

    const BootstrapModal = React.createClass({
        // The following two methods are the only places we need to
        // integrate Bootstrap or jQuery with the components lifecycle methods.
        componentDidMount() {
            // When the component is added, turn it into a modal
            $(this.refs.root).modal({backdrop: 'static', keyboard: false, show: false});

            // Bootstrap's modal class exposes a few events for hooking into modal
            // functionality. Lets hook into one of them:
            $(this.refs.root).on('hidden.bs.modal', this.handleHidden);
        },
        componentWillUnmount() {
            $(this.refs.root).off('hidden.bs.modal', this.handleHidden);
        },
        close() {
            $(this.refs.root).modal('hide');
        },
        open() {
            $(this.refs.root).modal('show');
        },
        render() {
            let confirmButton = null;
            let cancelButton = null;
            if (this.props.confirm) {
                confirmButton = (
                    <BootstrapButton onClick={this.handleConfirm} className="btn-primary">
                        {this.props.confirm}
                    </BootstrapButton>
                );
            }
            if (this.props.cancel) {
                cancelButton = (
                    <BootstrapButton onClick={this.handleCancel} className="btn-default">
                        {this.props.cancel}
                    </BootstrapButton>
                );
            }

            return (
                <div className="modal fade" ref="root">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" onClick={this.handleCancel}>
                                    &times;
                                </button>
                                <h3>{this.props.title}</h3>
                            </div>
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                            <div className="modal-footer">
                                {cancelButton}
                                {confirmButton}
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
        handleCancel() {
            if (this.props.onCancel) {
                this.props.onCancel();
            }
        },
        handleConfirm() {
            if (this.props.onConfirm) {
                this.props.onConfirm();
            }
        },
        handleHidden() {
            if (this.props.onHidden) {
                this.props.onHidden();
            }
        }
    });

    const Example = React.createClass({
        handleCancel() {
            if (confirm('Are you sure you want to cancel?')) {
                this.refs.modal.close();
            }
        },
        render() {
            const modal = (
                <BootstrapModal ref="modal" confirm="OK" cancel="Cancel" onCancel={this.handleCancel} onConfirm={this.closeModal} onHidden={this.handleModalDidClose} title="Hello, Bootstrap!">
                    This is a React component powered by jQuery and Bootstrap!
                </BootstrapModal>
            );
            return (
                <div className="example">
                    {modal}
                    <BootstrapButton onClick={this.openModal} className="btn-default">
                        Open modal
                    </BootstrapButton>
                </div>
            );
        },
        openModal() {
            this.refs.modal.open();
        },
        closeModal() {
            this.refs.modal.close();
        },
        handleModalDidClose() {
            alert("The modal has been dismissed!");
        }
    });

    ReactDOM.render(
        <Example/>, document.getElementById('jqueryexample'));
});