// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

var browserHistory = router.browserHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var City = require("../components/City");
var Member = require("../components/Member");


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {/* If user selects city or member show the appropriate component */}
      <Route path="city" component={City} />
      <Route path="member" component={Member} />

      {/* If user selects any other path... we get the city Route */}
      <IndexRoute component={City} />

    </Route>
  </Router>

);