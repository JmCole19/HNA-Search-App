import React, { Component } from 'react';
import SearchBar from './searchBar';
import DataContainer from './dataContainer';
import { connect } from 'react-redux';
import * as actions from '../actions/fetchData';
import { Link } from 'react-router-dom';

//this page is the main home page for the application.

class HomePage extends Component {
    render() {
        return (
            <div className="home">
                <h2>Search for Hacker News!</h2>
                <SearchBar page="home" />
                <Link to='/history'><button>Go to Search History</button></Link>
                <div>
                    <DataContainer />
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(HomePage);