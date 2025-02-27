import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types'

const TodoList = ({todos, toggleTodo}) =>(
  <ul>
    {todos.map(todo=>(
      <Todo key={todo.id}{...todo}
      onClick={()=>{return toggleTodo(todo.id)}}
      ></Todo>
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList;