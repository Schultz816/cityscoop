// Include React
var React = require("react");

// Here we include all of the sub-components
var Member = require("./Member");

// Here we create our main component, Main. It displays a click count and renders the Member
var Main = React.createClass({
  // Here we set a generic state associated with the number of clicks on this component
  getInitialState: function() {
    return {
      clicks: 0
    };
  },
// Here we create a function for updating this component's clicks
  // We will give the Memeber component access to this function by passing it as a prop
  setMain: function(newClicks) {
    this.setState({
      clicks: newClicks
    });
  },
// Here we render the function
render: function(){
  return(
	<header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style= {{background-image: url(images/background_1.jpg) data-stellar-background-ratio="0.5"}}</header>
	            <div Name="overlay"></div>
	            <div className="container">
	                <div className="row">
	                    <div className="col-md-12 text-center">
	                        <div className="display-t js-fullheight">
	                            <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
	                                <h1>A <em>community-sourced</em> travel guide,<br> Right at your fingertips</br></h1>
	                                <button className="btn btn-6 btn-6d">Start exploring</button>
	                                <button className="btn btn-6 btn-6d">Sign Up / Login</button>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>


module.exports = Main;
