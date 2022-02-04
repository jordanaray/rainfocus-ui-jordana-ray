import logo from './logo.svg';
import './sass/App.scss';
import Nav from './components/nav.js';
import Badge from './components/badge.js';
import Schedule from './components/schedule.js';
import Files from './components/files.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Badge />
      <Schedule />
      <Files />
      <header className="App-header">
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
