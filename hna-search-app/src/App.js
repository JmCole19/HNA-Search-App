import React from 'react';
import './App.css';
import HomePage from './components/homePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HistoryPage from './components/historyPage';

//main application page, handles displaying all information

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1 style={{textAlign: 'center'}}>Welcome!</h1>
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path='/history' component={HistoryPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;