"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var then = require('../lib/then');

describe('Calculator Component', function () {
  var CalculatorComponent;
  before(function (done) {
    CalculatorComponent = require('../../public/components/CalculatorComponent.jsx');
    done();
  });

  it('renders CalculatorComponent, check for two InputNumber component instances(child component)', function () {
    var renderedTree = TestUtils.renderIntoDocument(<CalculatorComponent/>);
    var renderedMyComponent1 = TestUtils.findRenderedDOMComponentWithClass(renderedTree, 'container text-center');
    var renderedMyComponentInput = TestUtils.scryRenderedDOMComponentsWithTag(renderedTree, 'input');

    expect(renderedTree).toExist();
    expect(TestUtils.isDOMComponent(renderedMyComponent1)).toBe(true);
    expect(TestUtils.isDOMComponent(renderedMyComponentInput)).toBe(false);
    expect(renderedMyComponentInput.length).toEqual(2);
    expect(TestUtils.isCompositeComponent(renderedMyComponent1)).toBe(false);

    expect(renderedTree.state.num1).toEqual(0);
    expect(renderedTree.state.num2).toEqual(0);
    expect(renderedTree.state.result).toEqual(0);
  });

  it('check Add button click', function(done) {
    var renderedTree = TestUtils.renderIntoDocument(<CalculatorComponent/>);
    var renderedMyComponentInput = TestUtils.scryRenderedDOMComponentsWithTag(renderedTree, 'input');
    var renderedMyComponentBtnArray = TestUtils.scryRenderedDOMComponentsWithTag(renderedTree, 'button');

    renderedTree.state.num1 = 10;
    renderedTree.state.num2 = 20;
      TestUtils.Simulate.click(renderedMyComponentBtnArray[0]);
      then(() => {
        expect(renderedTree.state.result).toBe(30);
        done();
      });
  });

  it('check Subtract button click', function(done) {
    var renderedTree = TestUtils.renderIntoDocument(<CalculatorComponent/>);
    var renderedMyComponentBtnArray = TestUtils.scryRenderedDOMComponentsWithTag(renderedTree, 'button');

    renderedTree.state.num1 = 10;
    renderedTree.state.num2 = 20;
      TestUtils.Simulate.click(renderedMyComponentBtnArray[1]);
      then(() => {
        expect(renderedTree.state.result).toBe(-10);
        done();
      });
  });

  it('check Multiply button click', function(done) {
    var renderedTree = TestUtils.renderIntoDocument(<CalculatorComponent/>);
    var renderedMyComponentBtnArray = TestUtils.scryRenderedDOMComponentsWithTag(renderedTree, 'button');

    renderedTree.state.num1 = 10;
    renderedTree.state.num2 = 20;
      TestUtils.Simulate.click(renderedMyComponentBtnArray[2]);
      then(() => {
        expect(renderedTree.state.result).toBe(200);
        done();
      });
  });

  it('check Add button click', function(done) {
    var renderedTree = TestUtils.renderIntoDocument(<CalculatorComponent/>);
    var renderedMyComponentBtnArray = TestUtils.scryRenderedDOMComponentsWithTag(renderedTree, 'button');

    renderedTree.state.num1 = 10;
    renderedTree.state.num2 = 20;
      TestUtils.Simulate.click(renderedMyComponentBtnArray[3]);
      then(() => {
        expect(renderedTree.state.result).toBe(0.5);
        done();
      });
  });
});
