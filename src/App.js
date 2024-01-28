
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import NetworthCalculator from './components/NetworthCalculator/NetworthCalculator'

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <NetworthCalculator/>
    </div>
  );
}

export default App;
