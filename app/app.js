/**
 * Created by ivan on 8/10/16.
 */

var MessageFormComponent = React.crateClass({
    render: function () {
        return (
            <div id="send-message-box">
                <form>
                    <input type="text" name="message" id="message"/>
                    <button className="btn waves-effect waves-light" type="submit" name="action">
                        Enviar
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
});

var ChatComponent = React.createClass({
    render: function () {
        return (
            <div id="chat">
                <MessageFormComponent />
            </div>
        )
    }
});

var HeaderComponent = React.createClass({
    render: function () {
        return (
        <nav>
            <div className="nav-wrapper indigo darken-3">
                <a href="#" class="brand-logo">Chat con React</a>
            </div>
        </nav>
        )
    }
});

var AppComponent = React.createClass({
    render: function () {
        return (
            <main>
                <HeaderComponent />
                <ChatComponent />
            </main>
        )
    }
});

ReactDOM.render(
    <AppComponent />,
    document.getElementById('app')
);