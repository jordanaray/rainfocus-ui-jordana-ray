import './sass/App.scss';
import './sass/layout.scss';
import Nav from './components/nav.js';
import Badge from './components/badge.js';
import Schedule from './components/schedule.js';
import Files from './components/files.js';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <Nav />
        <div className="main">
          <div class="wrapper_inner">
            <div className="layout horizontal">
            <Badge className="layout flex-30" />
            <Schedule className="layout flex-70" />
            </div>
          <Files />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
