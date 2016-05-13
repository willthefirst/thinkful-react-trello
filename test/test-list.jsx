var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('chai').expect;

var List = require('../app/List');

describe('List component', function() {
  var listData = {
    title: "My test list",
    cards: [
      { content: "Card 1", draftContent: '', complete: false },
      { content: "Card 2", draftContent: '', complete: false },
      { content: "Card 3", draftContent: '', complete: false }]
  };

  it('renders its title and cards', function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<List
      title={listData.title}
      cards={listData.cards}
   />);
    var result = renderer.getRenderOutput();


    console.log(result);
    // expect(result.props.children[0].props.children).to.equal(cardData.content);
  });
});
