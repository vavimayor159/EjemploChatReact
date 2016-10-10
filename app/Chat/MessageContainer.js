/**
 * Created by ivan on 9/10/16.
 */
var React = require('react');

module.exports = React.createClass({
    render: function () {
        var messages = this.props.messagesValues.map(function (message) {
            return <p>{message}</p>
        });

        return (
            <div id="message-container">
                {messages}
            </div>
        )
    }
});