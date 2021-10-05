import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import Home from './Components/Home/Home.jsx';
import Detail from './Components/Detail/Detail.jsx';
import CreateGame from './Components/CreateGame/CreateGame.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/videogames' component={Home} />
        <Route path='/videogame/add' component={CreateGame} />
        <Route path='/videogame/:idGame' component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
