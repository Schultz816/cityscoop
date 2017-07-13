//app.js responsible for render. 
//Include dependencies and components
var React = require("react");
var ReactDOM = require("react-dom");
var Main = require("./components/Main");

//Take Main and dump into app of index.html
ReactDOM.render(<Main />, document.getElementById("app"));