/**
 * Created by ivan on 8/10/16.
 */

var React = require('react');

// Import the components
var Header = require('./Header');
var Chat = require('./Chat');

// Create the main component
module.exports = React.createClass({
    render: function () {
        return (
            <main>
                <Header />
                <Chat />
            </main>
        )
    }
});