<<<<<<< HEAD
// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the main Component
var Main = require("./components/Main");

// This code here allows us to render our main component 
=======
//app.js responsible for render. 
//Include dependencies and components
var React = require("react");
var ReactDOM = require("react-dom");
var Main = require("./components/Main");

//Take Main and dump into app of index.html
>>>>>>> 27dca7af6567d869fc9fd0d3bc643a8c67316eb5
ReactDOM.render(<Main />, document.getElementById("app"));