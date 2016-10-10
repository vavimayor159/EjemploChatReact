/**
 * Created by ivan on 8/10/16.
 */

// Import the library's
var ReactDOM = require('react-dom');
var React = require('react');

// Import the components
var Header = require('./Header');
var Chat = require('./Chat');

// Create the main component
var ChatApp = React.createClass({
    render: function () {
        return (
            <main>
                <Header />
                <Chat />
            </main>
        )
    }
});

// Render the main component
ReactDOM.render(
    <ChatApp />,
    document.getElementById('app')
);