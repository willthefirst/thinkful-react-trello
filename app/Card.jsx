var React = require('react');
var ReactDOM = require('react-dom');

function Card(props) {
  return (
    <li style={{marginBottom: 12}}>
      <span style={props.data.complete ? {textDecoration: 'line-through'} : null}>
        {props.data.content}
      </span>
      <input
        type="text"
        value={props.data.draftContent}
        onChange={props.onAddInputChanged}
        style={{display: 'block'}}
      />
      <button onClick={props.onAddClick}>Submit</button>
      <button onClick={props.onMarkCompleted}>Complete</button>
    </li>
  )
}

module.exports = Card;
