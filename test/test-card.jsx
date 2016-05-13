var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('chai').expect;

var Card = require('../app/Card');

describe('Card component', function() {
  it('Renders the content and buttons', function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<Card content={"My test content"} />);
    var result = renderer.getRenderOutput();

    result.props.children.map(function(child) {
      console.log(child.props);
    });
    expect(result.props.content).to.equal('My test content');
  });
});
