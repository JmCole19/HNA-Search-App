import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        const { results } = this.props;
        const resultList = results.length ? (
            results.map(result => {
                return (
                    <div className="result card" key={result.id}>
                        <h1>{result.title}</h1>
                        <p>{result.body}</p>
                        <Link to={'/results/' + result.id}><button>Click Here!</button></Link>
                    </div>
                )
            })
        ) : (
                <div className="center">
                    Start typing to search!
                </div>
            )
        return (
            <div className='container home'>
                {resultList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}

export default connect(mapStateToProps)(Home);