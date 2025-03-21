import Todo from "./components/Todo";
import initialState from "./data/data";
import { useReducer, useState } from "react";

// Reducer
function todosReducer(state, action) {
  console.log(action);
  //return state;
  switch (action.type) {
    case "add_todo": {
      const newTodo = {
        title: action.payload,
        completed: false,
        id: state.length + 1,
        userId: 1,
      };
      return [newTodo, ...state];
    }
    case "toggle_todo":{
      return(state.map(todo=> todo.id ===action.payload ?{...todo, completed: !todo.completed} :todo))}

      case "delete_todo":{
        return state.filter(todo => todo.id !== action.payload)
      }

      case "edit_todo":{
        return state.map(todo=>
          todo.id === action.payload.id ? 
          {...todo, title: action.payload.title}
          :todo
        );
      }


    default: {
      return state;
    }
  }
}

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  // console.log(todos);
  const handleClick = () => {
    dispatch({ type: "add_todo", payload: newTodo });
    setNewTodo("");
  };
  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>

      {todos.map((t) => (
        <Todo todo={t} key={t.id} dispatch= {dispatch} />
      ))}
    </>
  );
}

export default App;


