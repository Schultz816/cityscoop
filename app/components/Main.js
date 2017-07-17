//index code to be moved here


var React = require("react");

// // Here we include all of the sub-components
// var Child = require("./Search");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers");

//create component 
var Main = React.createClass({

	render: function(){

		return(

		<div className = "main-container">

			<p>Hello World</ p>

		</div>
		)


	}


});

module.exports = Main;
