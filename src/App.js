import './components/css/App.css';
import Header from './components/dieComponents/Header';
import NewDie from './components/dieComponents/Newdie';
import Die from './components/dieComponents/Die';

function App() {


  return (
    <div className="App">
      <Header />
      <div className= 'dice-container'>
        <Die value = '1'/>
        <Die value = '2'/>
        <Die value = '3'/>
        <Die value = '4'/>
        <Die value = '5'/>
        <Die value = '6'/>
        <Die value = '7'/>
        <Die value = '8'/>
        <Die value = '9'/>
        <Die value = '10'/>
      </div>
      <NewDie />
    </div>
  );
}

export default App;
