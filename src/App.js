import './App.css';
import Counter from './component/Counter';
import CounterTow from './component/CounterTow';
import Users from './component/Users';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <CounterTow></CounterTow><br/>
      <Users></Users>
    </div>
  );
}

export default App;
