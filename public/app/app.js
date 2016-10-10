/**
 * Created by ivan on 8/10/16.
 */

var MessageContarinerComponent = React.createClass({
   render: function () {
       return (
           <div id="message-container">
                
           </div>
       )
   }
});

var MessageFormComponent = React.createClass({
    render: function () {
        return (
            <form id="send-message-form">
                <div className="row">
                    <div className="col s10">
                        <input type="text" name="message" id="message"/>
                    </div>
                    <div className="col s2">
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            Enviar
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        )
    }
});

var ChatComponent = React.createClass({
    render: function () {
        return (
            <div id="chat">
                <MessageContarinerComponent />
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