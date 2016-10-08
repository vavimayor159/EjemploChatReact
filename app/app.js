/**
 * Created by ivan on 8/10/16.
 */

var ChatComponent = React.createClass({
    render: function () {
        return (
            <form id="chat">
                <input type="text" name="message" id="message"/>
                <button className="btn waves-effect waves-light" type="submit" name="action">
                    Enviar
                    <i className="material-icons right">send</i>
                </button>
            </form>
        )
    }
});

var TitleComponent = React.createClass({
    render: function () {
        return (
            <h1>Chat con React</h1>
        )
    }
});

var AppComponent = React.createClass({
    render: function () {
        return (
            <main>
                <TitleComponent />
                <ChatComponent />
            </main>
        )
    }
});

ReactDOM.render(
    <AppComponent />,
    document.getElementById('app')
);