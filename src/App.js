import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, decrement, increment, removeLastTodo } from './vanilaRedux/mainReducer';

function App() {
    const count = useSelector((state) => state.main.count);
    const todos = useSelector((state) => state.main.todos);
    const dispatch = useDispatch();

    return (
        <div className='App'>
            <h1>Counter {count}</h1>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(removeLastTodo())}>
                remove Last Todo
            </button>
            <button onClick={() => dispatch(addTodo(prompt()))}>
                add Todo
            </button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo}> {todo} </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
