import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Card from './components/card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
          <Header/>
      </div>
      <div>
        <Card/>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
