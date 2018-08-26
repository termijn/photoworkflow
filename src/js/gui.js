
window.$ = window.jQuery = require('jquery');

require('semantic-ui/dist/semantic.css')
require('semantic-ui/dist/semantic.js')
require('../gui/generic.css')

$(document).ready(function() {
    $('.ui.selection.dropdown').dropdown();
});

//require("html-loader!../html/folderselector.html");

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
//document.getElementsByTagName('body')[0].innerHTML = `node Version: ${process.versions.node}`
