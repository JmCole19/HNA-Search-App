import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultPage extends Component {
    render() {
        const result = this.props.result ? (
            <div className='result'>
                <h4 className='center'>
                    {this.props.result.title}
                </h4>
                <p>
                    {this.props.result.body}
                </p>
            </div>
        ) : (
                <div className='center'>
                    ...Loading post
                </div>
            )

        return (
            <div className="container">
                {result}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.result_id;
    return {
        result: state.results.find(result => result.id === id)
    }
}

export default connect(mapStateToProps)(ResultPage);