import './components/css/App.css';
import Header from './components/dieComponents/Header';
import NewDie from './components/dieComponents/New Die';
import Die from './components/dieComponents/Die';

function App() {


  return (
    <div className="App">
      <Header />
      <Die />
      <NewDie />
    </div>
  );
}

export default App;
