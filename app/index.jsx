var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./Board');

var BoardContainer = React.createClass({
  getInitialState: function() {
    return {
      data: {
        title: 'No board title',
        lists: []
      }
    }
  },
  componentDidMount: function() {
    this.setState(this.props);
  },
  onAddInputChanged: function(listIndex, cardIndex, event) {
    var newLists = this.state.data.lists.slice();
    newLists[listIndex].cards[cardIndex].draftContent = event.target.value;

    var newState = Object.assign({}, this.state, {
      data: {
        title: this.state.data.title,
        lists: newLists
      }
    });

    this.setState(newState);
  },
  onAddClick: function(listIndex, cardIndex, event) {
    var newLists = this.state.data.lists.slice();
    newLists[listIndex].cards[cardIndex].content = newLists[listIndex].cards[cardIndex].draftContent;
    newLists[listIndex].cards[cardIndex].draftContent = "";

    var newState = Object.assign({}, this.state, {
      data: {
        title: this.state.data.title,
        lists: newLists
      }
    });

    this.setState(newState);
  },
  onMarkCompleted: function(listIndex, cardIndex, event) {
    var newLists = this.state.data.lists.slice();
    newLists[listIndex].cards[cardIndex].complete = !newLists[listIndex].cards[cardIndex].complete;

    var newState = Object.assign({}, this.state, {
      data: {
        title: this.state.data.title,
        lists: newLists
      }
    });

    this.setState(newState);
  },
  render: function() {
    return (<Board
            data={this.props.data}
            onAddInputChanged={this.onAddInputChanged}
            onAddClick={this.onAddClick}
            onMarkCompleted={this.onMarkCompleted} />)
  }
});

// Test data
var boardInfo = {
    title: 'Board title',
    lists: [
        {
            title: 'List 1 title',
            cards: [
              { content: "Card 1", draftContent: '', complete: false },
              { content: "Card 2", draftContent: '', complete: false },
              { content: "Card 3", draftContent: '', complete: false }]
        },
        {
            title: 'List 2 title',
            cards: [
              { content: "Card 1", draftContent: '', complete: false },
              { content: "Card 2", draftContent: '', complete: false },
              { content: "Card 3", draftContent: '', complete: false }]
        }
    ]
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<BoardContainer data={boardInfo} />, document.getElementById('app'));
});
