import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { search } from '../actions/searchAction';
import { getData } from '../actions/resultsAction';

class SearchBar extends Component {
    state = {}

    componentDidMount() {
        this.props.getData();
    }

    render() {
        const { value } = this.props;

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

const mapStateToProps = state => {
    return {
        value: state.value
    }
}

function mapDispatchToProps(dispatch) {
    return {
        search: (search) => dispatch(search),
        getData: (data) => dispatch(getData)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);