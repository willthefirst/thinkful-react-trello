var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./Card');

function List(props) {
  return (
    <div style={{display: 'inline-block', marginLeft: 20}}>
      <h2>{props.title}</h2>
      <ul>
        {props.cards.map(function(card, i){
          return (<Card
                    content={card}
                    key={i}
                    onAddInputChanged={props.onAddInputChanged.bind(null, i)}
                    onAddClick={props.onAddClick}
                    onMarkCompleted={props.onMarkCompleted}
                  />
          );
        })}
      </ul>
    </div>
  )
}

module.exports = List;
