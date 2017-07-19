//index code to be moved here


import React from 'react';


// Including the Link component from React Router to navigate within our application without full page reloads
// var Link = require("react-router").Link;

// // Here we include all of the sub-components
// var Child = require("./Search");

//create component 
class Main extends React.Component {

	render () {
		return (
			<div>
		         <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{backgroundImage: 'url(images/cityBanners/maldives.jpg)'}} data-stellar-background-ratio="0.5">
			       <div className="overlay" />
			       <div className="container">
			         <div className="row">
			           <div className="col-md-12 text-center">
			             <div className="display-t js-fullheight">
			               <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
			                 <h1>The Maldives</h1>
			                 <h2>Blue lagoons and white sand beaches</h2>
			               </div>
			             </div>
			           </div>
			         </div>
			       </div>
			     </header>
		    </ div>

	)}


};

module.exports = Main;
