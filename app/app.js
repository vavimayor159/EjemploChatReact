/**
 * Created by ivan on 8/10/16.
 */

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
            <TitleComponent />
        )
    }
});
ReactDOM.render(
    <AppComponent />,
    document.getElementById('app')
);