import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/fetchData';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class DataContainer extends Component {

    //the Handle search results function displays results from the most recently searched item

    handleSearchResults = () => {
        if (this.props.length === 0) {
            return (
                <div> No results!</div>
            )
        } else {
            const { results } = this.props;
            return (
                <div>
                    <h1>Posts</h1>
                    {results.map(result =>
                        <div className="cardDiv" key={result.objectID}>
                            <Card className='mx-auto' style={{ width: '700px', marginBottom: '20px' }}>
                                <Card.Header>By: {result.author}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{result.title}</Card.Title>
                                    <Card.Text>
                                        {result.body}
                                    </Card.Text>
                                    <Button variant="success" href={result.url}>See Article</Button>
                                </Card.Body>
                            </Card>
                            {'\n'}
                        </div>)}
                </div>
            )
        }
    }

    render() {
        return this.props.loading ? (
            <h2>Loading...</h2>
        ) : this.props.error ? (
            <h2>{this.error}</h2>
        ) : (
                    <div>
                        <div>{this.handleSearchResults()}</div>
                    </div>
                )
    }
}

const mapStateToProps = state => {
    return {
        results: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);