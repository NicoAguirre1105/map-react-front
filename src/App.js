import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Menu from "./components/Menu/Menu";
import Download from "./pages/download";
import Presets from "./pages/presets"
import ProcessFile from "./pages/processfile";

function App() {
 
  return (
    
    <Provider store={store}>
      <div className="App">
      <Router>
      <Menu/>
      <Route path="/" exact component={Home} />
      <Route path="/Home" exact component={Home} />
      <Route path="/Download" component={Download}/>
      <Route path="/About" component={About}/>
      {/*<Route path="/Presets" component={Presets}/>*/}
      <Route path="/ProcessFile" component={ProcessFile}/>
      </Router>
      </div>
    </Provider>
  );
}

export default App;