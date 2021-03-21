import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
