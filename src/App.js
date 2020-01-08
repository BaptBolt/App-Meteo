import React from 'react';
import './App.css';
import Weather from './Component/Weather';
import {Route, Switch} from 'react-router-dom';
import SearchWeather from './Component/SearchWeather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/search" component={SearchWeather}/>
          <Route exact path ="/" component={Weather}/>
       </Switch>
      </header>
    </div>
  );
}

export default App;
