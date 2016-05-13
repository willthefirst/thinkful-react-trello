var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('chai').expect;

var Board = require('../app/Board');

describe('Board component', function() {
  var boardData = {
    title: 'Whiteboard boardMcBoard',
    lists: [
      {key: 'dummylist1'},
      {key: 'dummylist1'},
      {key: 'dummylist1'}
    ]
  };

  var dummyHandler = function(){};

  it('renders its title and lists', function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(
      <Board
        data={boardData}
        onAddInputChanged={dummyHandler}
        onAddClick={dummyHandler}
        onMarkCompleted={dummyHandler}
      />
    );
    var result = renderer.getRenderOutput();
    expect(result.props.children[0].props.children).to.equal(boardData.title);
    expect(result.props.children[1].props.children).to.have.lengthOf(boardData.lists.length);
  });
});
