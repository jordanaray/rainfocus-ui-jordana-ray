import './sass/App.scss';
import './sass/layout.scss';
import './sass/variables.scss';
import './sass/typography.scss';
import Nav from './components/nav.js';
import Badge from './components/badge.js';
import Schedule from './components/schedule.js';
import Files from './components/files.js';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Nav />
        <div className="main-container layout vertical ">

          <div className="layout horizontal vertical-sm center-justified">
            <div className="layout vertical flex-35 margin-end-sm margin-bottom-sm ">
              <Badge />
            </div>

            <div className="layout vertical flex-65 margin-bottom-sm">
              <Schedule />
            </div>
          </div>
          <div className="layout vertical">
            <Files />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
