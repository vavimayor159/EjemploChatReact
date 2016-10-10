/**
 * Created by ivan on 9/10/16.
 */
var React = require('react');

module.exports = React.createClass({
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