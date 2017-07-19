//index code to be moved here


var React = require("react");

// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// // Here we include all of the sub-components
// var Child = require("./Search");

//create component 
var Main = React.createClass({

	render: function(){
		<div>
			<div>Hellow World</ div>

			<div className="jumbotron">
	            <h1>React Router</h1>
	            <p><em>Because we can't afford to miss a minute of this video! #flylikeaneagle</em></p>
	            <Link to="/member"><button className="btn btn-default">City</button></Link>
	            <Link to="/city"><button className="btn btn-default">Member</button></Link>
	        </div>
	    </ div>
	}


});

module.exports = Main;
