import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Header from "./components/Header/Header";
import Download from "./pages/download";
import Presets from "./pages/presets"
import ProcessFile from "./pages/processfile";
import Profile from "./pages/profile";
import { setRuleSet } from './actions/fileAction';
function App() {
 
  return (
    
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Download" component={Download} />
          <Route path="/About" component={About} />
          <Route path="/Presets" component={Presets} />
          <Route path="/ProcessFile" component={ProcessFile} />
          <Route path="/Profile" component={Profile} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;