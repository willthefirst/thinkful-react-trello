var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./List');

function Board(props) {
  return (
    <div>
      <h1>{props.data.title}</h1>
      <div className="list-container">
        {props.data.lists.map(function(list, i){
          return (<List
                    title={list.title}
                    cards={list.cards}
                    key={i}
                    onAddInputChanged={props.onAddInputChanged.bind(null, i)}
                    onAddClick={props.onAddClick.bind(null, i)}
                    onMarkCompleted={props.onMarkCompleted.bind(null, i)} />)
        })}
      </div>
    </div>
  )
}

module.exports = Board;
