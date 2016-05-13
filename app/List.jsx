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
                    data={card}
                    key={i}
                    onAddInputChanged={props.onAddInputChanged.bind(null, i)}
                    onAddClick={props.onAddClick.bind(null, i)}
                    onMarkCompleted={props.onMarkCompleted.bind(null, i)}
                  />
          );
        })}
      </ul>
    </div>
  )
}

module.exports = List;
