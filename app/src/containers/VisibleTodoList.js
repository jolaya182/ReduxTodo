import { connect } from 'react-redux'
import { toggleTodo } from '../actions/actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions/actions'

const getVisibleTodos = (todos, filter) => {
  console.log("todos", todos)
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      console.log('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state =>{  
  console.log("mapStateToProps, ", state);
  return({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  })
}
const mapDispatchToProps = dispatch =>{ 
  console.log("mapDispatchToProps, ", dispatch);
  return ({
  toggleTodo: id => dispatch(toggleTodo(id))
  })
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)