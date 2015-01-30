var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var NavBar = require('./NavBar'),
    Home = require('./Home'),
    About = require('./About');

var content = document.getElementById('content');

var Routes = (
  <Route handler={NavBar}>
    <Route name="/" handler={Home}/>
    <Route name="about" handler={About}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
