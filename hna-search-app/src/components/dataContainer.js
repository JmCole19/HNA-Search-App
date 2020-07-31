import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/fetchData';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function DataContainer({ results, fetchData }) {
    useEffect(() => {
        fetchData()
    }, [])
    return results.loading ? (
        <h2>Loading...</h2>
    ) : results.error ? (
        <h2>{results.error}</h2>
    ) : (
                <div>
                    <h1>Posts</h1>
                    {results && results.posts && results.posts.map(result =>
                        <div className ="cardDiv" key={result.objectID}>
                            <Card>
                                <Card.Header>By: {result.author}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{result.title}</Card.Title>
                                    <Card.Text>
                                        {result.body}
                                    </Card.Text>
                                    <Button variant="primary" href={result.url}>See Article</Button>
                                </Card.Body>
                            </Card>
                            {'\n'}
                        </div>)}
                </div>
            )
}

const mapStateToProps = state => {
    return {
        results: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);