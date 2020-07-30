import React from 'react';
import './App.css';
import SearchBar from './components/searchBar';
// import Home from './components/home';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import resultPage from './components/resultPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className='App'>
          <h1 style={{ textAlign: 'center' }}>Search for Hacker News!</h1>
          <SearchBar />
          </div>
    );
  }

export default App;
