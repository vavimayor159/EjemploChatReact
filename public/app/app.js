/**
 * Created by ivan on 8/10/16.
 */

var MessageFormComponent = React.createClass({
    render: function () {
        return (
            <div id="send-message-box">
                <form>
                    <div className="row">
                        <div className="col s9">
                            <input type="text" name="message" id="message"/>
                        </div>
                        <div className="col s3">
                            <button className="btn waves-effect waves-light" type="submit" name="action">
                                Enviar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
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
                    <a href="#" className="brand-logo">Chat con React</a>
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