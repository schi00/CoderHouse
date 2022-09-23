import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Saludos tutor!" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sitio en construccion :P
        </p>
      </header>
    </div>
  );
}

export default App;
