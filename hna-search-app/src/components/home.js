import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Home extends Component {
    render() {
        const { items } = this.props;
        const itemList = items.length ? (
            items.map(item => {
                return (
                    <Card className="item card" key={item.id}>
                        <Card.Header>{item.title}</Card.Header>
                        <Card.Body>
                            <Card.Title>{item.author}</Card.Title>
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

            console.log(items)
        return (
            <div className='container home'>
                {itemList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(Home);