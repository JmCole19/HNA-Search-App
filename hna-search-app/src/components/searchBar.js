import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { searchData, fetchData } from '../actions/fetchData';

class SearchBar extends Component {
    state = {
        currentInput: ''
    }


    handleInputChange = (event) => {
        let newInput = event.target.value;
        this.setState({
            currentInput: newInput
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.searchData(this.state.currentInput)
        this.props.fetchData(this.state.currentInput)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    className="mx-auto"
                    placeholder="Search"
                    type='search'
                    onChange={this.handleInputChange}
                    style={{ maxWidth: '200px', textAlign: 'center' }}></input>
                <button type='submit'>Search</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        history: state.searches,
        results: state.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchData: (terms) => { dispatch(searchData(terms)) },
        fetchData: (query) => dispatch(fetchData(query))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
