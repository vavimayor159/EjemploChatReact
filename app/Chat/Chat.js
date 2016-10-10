/**
 * Created by ivan on 9/10/16.
 */
var React = require('react');

var MessageContainer = require('MessageContainer');
var MessageForm = require('MessageForm');

module.exports = React.createClass({
    render: function () {
        return (
            <div id="chat">
                <MessageContainer />
                <MessageForm />
            </div>
        )
    }
});