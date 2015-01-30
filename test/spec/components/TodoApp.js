'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var TodoApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    TodoApp = require('../../../src/scripts/components/NavBar.js');
    component = React.createElement(TodoApp);
  });

  it('should create a new instance of TodoApp', function () {
    expect(component).toBeDefined();
  });
});
