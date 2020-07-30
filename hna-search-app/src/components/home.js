import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getData } from '../actions/resultsAction';
import store from '../index';

class Home extends Component {
    state = {}

    componentDidMount() {
        store.dispatch(getData)
    }

    render() {
        const {items} = this.props;
        const itemList = items.length ? (
            items.map(item => {
                return (
                    <Card className="item card" key={item.created_at_i}>
                        <Card.Header>{item.author}</Card.Header>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.text}
                            </Card.Text>
                            <Link to={'/results/' + item.id}><Button variant="primary">Click for more</Button></Link>
                        </Card.Body>
                    </Card>
                )
            })
        ) : (
                <div className="center">
                    Start typing to search!
                </div>
            )
        return (
            <div className='container home'>
                {itemList}
            </div>
        )
    }
}

const mapStateToProps = ({ items = [] }) => ({
    items
})

export default connect(mapStateToProps, { getData })(Home);