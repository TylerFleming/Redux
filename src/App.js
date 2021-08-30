import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, toggleLogIn } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      { 
        isLogged ? 'You are logged in' : ''
      }
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(toggleLogIn())}>Toggle Log In</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
