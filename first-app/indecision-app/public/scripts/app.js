'use strict';

var appRoot = document.getElementById('app');
var visibility = true;
var hideShowParagraph = function hideShowParagraph() {
    visibility = !visibility;
    render();
};
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toogle'
        ),
        React.createElement(
            'button',
            { onClick: hideShowParagraph },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'p',
            null,
            'Hey. These are some details you can now see!'
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
