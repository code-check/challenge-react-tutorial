"use strict";

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

describe('First Component', function () {
  var FirstComponent;
  before(function (done) {
    FirstComponent = require('../../public/components/FirstComponent.jsx');
    done();
  });

  it('renders without problems', function () {
    var renderedTree = TestUtils.renderIntoDocument(<FirstComponent/>);
    var renderedMyComponent = TestUtils.findRenderedDOMComponentWithClass(renderedTree, 'container text-center');
    expect(renderedTree).toExist();
    expect(TestUtils.isDOMComponent(renderedMyComponent)).toBe(true);
    expect(TestUtils.isCompositeComponent(renderedMyComponent)).toBe(false);
  });
});
