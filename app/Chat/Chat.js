/**
 * Created by ivan on 9/10/16.
 */
var React = require('react');

var MessageContainer = require('./MessageContainer');
var MessageForm = require('./MessageForm');

module.exports = React.createClass({

    /** Function for add messages to the state
     * add the message in the param to the state
     * @param message: Message to add */
    addMessage: function (message) {
        var newMessagesState = this.state.messages.slice(0);
        try {
            newMessagesState.push(message);
            this.setState({messages: newMessagesState});
        } catch (err){
            var errorMessage = err ? err.message : 'Hubo un error al registrar tú mensaje';
            Materialize.toast(errorMessage, 4000);
        }

    },

    getInitialState: function () {
        return {messages: []};
    },

    render: function () {
        return (
            <div id="chat">
                <MessageContainer messagesValues={this.state.messages}/>
                <MessageForm addMessageHandler={this.addMessage}/>
            </div>
        )
    }
});