import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { SEARCH } from '../actions/searchAction';

class SearchBar extends Component {

    renderInput(field) {
        return <input type="text" placeholder="Search" />
    }

    render() {

        const { handleSubmit } = this.props

        return (
            <form>
                <Field name="query" component={this.renderInput}/>
            </form>
        )
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);


export default SearchBar;