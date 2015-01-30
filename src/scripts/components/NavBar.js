'use strict';

var React = require('react/addons'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link=Router.Link;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var TodoApp = React.createClass({
  //render: function() {
  //    console.log('NavBar');
  //  return (
  //      <div>
  //          <header>
  //              <ul>
  //                  <li><Link to="/">Home</Link></li>
  //                  <li><Link to="about">About</Link></li>
  //              </ul>
  //          </header>
  //
  //      {/* this is the important part */}
  //          <RouteHandler/>
  //      </div>
  //  );
  //}

    render: function() {
        console.log('NavBar');
        return (
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">BeePOS</a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="about">About</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = TodoApp;
