/**
 * Created by ivan on 9/10/16.
 */
var React = require('react');

module.exports = React.createClass({

    /** Function who manage the submit action of the message form
     * it is handled by the send message action of the parent
     * but it can be extended */
    submitHandler: function (e) {
        e.preventDefault();
        this.props.addMessageHandler(this.state.message);
        this.setState({message: ''});
    },

    /** Function who change the message in the state when the input of the
     * field changes */
    changeMessageHandler: function (e) {
        this.setState({message: e.target.value});
    },

    getInitialState: function () {
        return {message: ''};
    },

    render: function () {
        return (
            <form id="send-message-form" onSubmit={this.submitHandler}>
                <div className="row">
                    <div className="col s10">
                        <input type="text" name="message" id="message" value={this.state.message}
                               onChange={this.changeMessageHandler}/>
                    </div>
                    <div className="col s2">
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            Enviar
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        )
    }
});