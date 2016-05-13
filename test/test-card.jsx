var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('chai').expect;

var Card = require('../app/Card');

describe('Card component', function() {
  var cardData = {
    content: 'some stuff',
    draftContent: '',
    completed: false
  }

  it('renders the content and buttons', function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<Card data={cardData} />);
    var result = renderer.getRenderOutput();

    expect(result.props.children[0].props.children).to.equal(cardData.content);
    expect(result.props.children[1].type).to.equal('input');
    expect(result.props.children[1].props.value).to.equal(cardData.draftContent);
    expect(result.props.children[2].type).to.equal('button');
    expect(result.props.children[3].type).to.equal('button');
  });
});
