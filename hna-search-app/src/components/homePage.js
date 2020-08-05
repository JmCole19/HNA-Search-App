import React, { Component } from 'react';
import SearchBar from './searchBar';
import DataContainer from './dataContainer';
import { connect } from 'react-redux';
import * as actions from '../actions/fetchData';
import HistoryPage from './historyPage';

//this page is the main home page for the application.

class HomePage extends Component {
    render() {
        return (
            <div className='home row'>
                <div className='col'>
                    <h2>Search for Hacker News!</h2>
                    <SearchBar page="home" />
                    <div className='col'>
                        <DataContainer />
                    </div>
                </div>
                <div className='col'>
                    <HistoryPage />
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(HomePage);