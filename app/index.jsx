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
    newLists[listIndex].cards[cardIndex] = event.target.value;

    var newState = Object.assign({}, this.state, {
      data: {
        title: this.state.data.title,
        lists: newLists
      }
    });

    this.setState(newState);
  },
  onAddClick: function(e) {
    console.log(e.target);
    e.target.value = "";
  },
  onMarkCompleted: function() {
    console.log('Marked complete!');
  },
  render: function() {
    return (<Board
            data={this.state.data}
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
            cards: ['Card 1', 'Card 2', 'Card 3']
        },
        {
            title: 'List 2 title',
            cards: ['Card 1', 'Card 2', 'Card 3']
        }
    ]
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<BoardContainer data={boardInfo} />, document.getElementById('app'));
});
