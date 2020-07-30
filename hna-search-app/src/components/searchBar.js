import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../actions/searchAction';
// import { fetchPosts } from '../actions/resultsAction';

class SearchBar extends Component {

    // componentDidMount() {
    //     this.props.dispatch(fetchPosts())
    // }

    render() {
        const { search, value } = this.props;

        return (
            <input
                className="form-control mx-auto"
                placeholder="Search"
                onChange={(e) => search(e.target.value)}
                value={value}
                style={{ maxWidth: '200px', textAlign: 'center' }} />
        );
    }
}

function mapStateToProps({ items }) {
    return { value: items.value };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);