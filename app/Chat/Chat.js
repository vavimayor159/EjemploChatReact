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

        // Send the message to the firebase database
        firebase.database().ref('/messages').push(message);

    },

    /** When the component is initialized
     * start a communication channel with the firebase
     * database */
    componentWillMount: function () {
        var messagesRef = firebase.database().ref('/messages');
        messagesRef.on('child_added', function(data) {

            var newMessagesState = this.state.messages.slice(0);
            newMessagesState.push({key: data.key, message: data.val()});
            this.setState({messages: newMessagesState});

        }.bind(this));
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