var React = require('react');
var ReactDOM = require('react-dom');

function Card(props) {
  return (
    <li style={{marginBottom: 12}}>
      {props.content}
      <input
        type="text"
        onChange={props.onAddInputChanged}
        style={{display: 'block'}} />
      <button onClick={props.onAddClick}>Submit</button>
      <button onClick={props.onMarkCompleted}>Complete</button>
    </li>
  )
}

module.exports = Card;
