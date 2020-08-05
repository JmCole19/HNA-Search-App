import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/fetchData';
import Button from 'react-bootstrap/Button';

//This displays recent searches and updates the list after each search.

class HistoryPage extends Component {

    //function to pull the previous search
    previousSearch = (event) => {
        this.props.fetchData(event.target.id)
    }

    render() {
        const { history } = this.props;
        return (
            <div>
                <h2>Search History</h2>
                {
                    history.map(search => {
                        return (
                            <ul key={search}>
                            <Button variant='warning' id={search} key={search} onClick={this.previousSearch}>{search}</Button>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (query) => dispatch(fetchData(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);
