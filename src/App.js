
import './App.css';
import Navbar from '../src/components/Layout/Header/Navbar';
import Home from '../src/components/Home/Home';
import TodoList from '../src/components/Body/TodoList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <TodoList />

    </div>
  );
}

export default App;
