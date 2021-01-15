import React from 'react';
// import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/HomePage/HomePage';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Switch>
        <Route exact path='/' component={Home} />
      </Switch> */}
      <Home />
    </div>
  );
}

export default App;
