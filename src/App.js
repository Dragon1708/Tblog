import logo from './logo.svg';
import './scss/App.scss';

import SideBar from "./Components/SideBar/SideBar";
import CenterBlock from "./Components/CenterBar/CenterBar";

function App() {
  return (
    <div className="App">
<SideBar/>
<CenterBlock/>
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
