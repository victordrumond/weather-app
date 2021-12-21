import './assets/css/App.css';
import SearchAndDisplay from './SearchAndDisplay.js';

function App() {
    
  return (
      <div id="main-container" className="container-fluid">
          <div id="header-container" className="d-flex justify-content-between">
              <h1>Weather App</h1>
          </div>
          <SearchAndDisplay/>
          <div id="footer-container" className="d-flex align-items-center justify-content-center">
              <footer className="text-center">
                  <p>&#169; 2021 Weather App | A project by Victor</p>
              </footer>
          </div>
      </div>
  );
};

export default App;
