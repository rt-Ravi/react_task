import logo from './logo.svg';
import './App.css';
import Header from './header';
import Phone_ui from './component';
import './style.css';

function App() {
  return (
    <div className="App">
      <Phone_ui></Phone_ui>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
