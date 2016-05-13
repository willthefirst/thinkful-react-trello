var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('chai').expect;

var List = require('../app/List');

describe('List component', function() {
  var listData = {
    title: "My test list",
    cards: [
      { data: 'dummy card 1' },
      { data: 'dummy card 2' },
      { data: 'dummy card 3' }
    ]
  };

  it('renders its title and cards', function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<List
        title={listData.title}
        cards={listData.cards}
        onAddInputChanged={function() {}}
        onAddClick={function() {}}
        onMarkCompleted={function() {}}
      />);
    var result = renderer.getRenderOutput();
    expect(result.props.children[0].props.children).to.equal(listData.title);
    expect(result.props.children[1].type).to.equal('ul');
    expect(result.props.children[1].props.children).to.have.lengthOf(listData.cards.length);
  });
});
