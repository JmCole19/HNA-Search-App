import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//This displays recent searches and updates the list after each search.

class HistoryPage extends Component {
    render() {
        const { history } = this.props;
        return (
            <div>
                <h2>Search History</h2>
                <Link to='/'><button>Back to Home</button></Link>
                {
                history.map(search => {
                    return (
                        <ul>
                            {search}
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

export default connect(mapStateToProps)(HistoryPage);
