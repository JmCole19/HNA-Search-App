import React, { Component } from 'react';
import SearchBar from './searchBar';
import DataContainer from './dataContainer';
import { connect } from 'react-redux';
import * as actions from '../actions/fetchData';

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <SearchBar page="home"/>
        <DataContainer/>
      </div>
    );
  }
}

export default connect(null, actions)(HomePage);