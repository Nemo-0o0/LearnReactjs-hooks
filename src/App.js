import './App.css'
import { useStore , actions} from './store';

function App() {

  const [state, dispatch] = useStore()
  const { todos, todoInput } = state

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
  }

  console.log(todos)

  console.log('todoInput:', todoInput);

  return ( 
    <div className="App-header"> 
      <input
        value={todoInput}
        placeholder='Enter todo'
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Click</button>
      {todos.map((todo, index) => ( 
        <li key={index}>{todo}</li>
      ))}
    </div>
   );
}

export default App;