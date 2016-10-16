/**
 * Created by ivan on 8/10/16.
 */

var React = require('react');

// Import the components
var Header = require('./Header');
var Chat = require('./Chat');

// Create the main component
module.exports = React.createClass({
    /** Before the component of the app will be mounted we do all the necesary
    configuration */
    componentWillMount: function () {

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBijCbjzyaLxlWI6r-wAPj08MF2qZTvmmQ",
            authDomain: "chat-react-16ae7.firebaseapp.com",
            databaseURL: "https://chat-react-16ae7.firebaseio.com",
            storageBucket: "chat-react-16ae7.appspot.com",
            messagingSenderId: "916238918422"
        };
        firebase.initializeApp(config);

    },

    render: function () {
        return (
            <main>
                <Header />
                <Chat />
            </main>
        )
    }
});