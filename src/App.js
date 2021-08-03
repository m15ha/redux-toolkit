//Redux-Vanila
// import { addTodo, decrement, increment, removeLastTodo } from './vanilaRedux/mainReducer';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    addTodo,
    decrement,
    increment,
    removeLastTodo,
} from './toolkitRedux/toolkitSlice';

const addAsyncTodo = () => {
    return async (dispatch) => {
        setTimeout(() => {
            dispatch(addTodo('Async Todo'));
        }, 2000);
    };
};

function App() {
    //Redux-Vanila
    // const count = useSelector((state) => state.main.count);
    // const todos = useSelector((state) => state.main.todos);
    // const dispatch = useDispatch();
    const count = useSelector((state) => state.toolkit.count);
    const todos = useSelector((state) => state.toolkit.todos);
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
            <button onClick={() => dispatch(addAsyncTodo())}>
                add async Todo
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
