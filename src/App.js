import React from 'react';
import image from "./assets/header.svg";
import Store from "./store/store";
import {Provider} from "react-redux";
import {Link} from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <Provider store={Store}>

      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">ReactNews</Link></li>
          </ul>
          <ul>
            <li><Link to="/">Search</Link></li>
            <li><Link to="/tech">Tech</Link></li>
          </ul>
        </nav>
        <header>
          <h1 className="title">React News API</h1>
          <img src={image} />
        </header>
    

        <main>
          <Routes />
        </main>

      </div>
    </Provider>

  );
}

export default App;
