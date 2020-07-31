import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../actions/searchAction';
import { fetchData } from '../actions/fetchData';

class SearchBar extends Component {
    render() {
        const { search, value } = this.props;

        return (
            <input
                className="form-control"
                placeholder="Search"
                onChange={(e) => search(e.target.value)}
                value={value} />
        );
    }
}

function mapStateToProps(state) {
    return { 
        results: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ search }, {fetchData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);