import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/fetchData';
import { Link } from 'react-router-dom';

function DataContainer({ results = [], fetchData }) {
    useEffect(() => {
        fetchData()
    })
    return results.loading ? (
        <h2>Loading...</h2>
    ) : results.error ? (
        <h2>{results.error}</h2>
    ) : (
                <div>
                    <h1>Posts</h1>
                    {results && results.hits && results.hits.map(hit => 
                    <div className="result card" key={hit.created_at_i}>
                        <h1>{hit.title}</h1>
                        <p>{hit.body}</p>
                        <Link to={'/results/' + hit.id}><button>Click Here!</button></Link>
                    </div>)}
                </div>
            )
}

const mapStateToProps = (state) => {
    return {
        results: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);