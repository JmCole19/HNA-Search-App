import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultPage extends Component {
    render() {
        const content = this.props.result ? (
            <div className='result'>
                <h4 className='center'>
                    {this.props.content.title}
                </h4>
                <p>
                    {this.props.content.body}
                </p>
            </div>
        ) : (
                <div className='center'>
                    ...Loading post
                </div>
            )

        return (
            <div className="container">
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.content_id;
    return {
        content: state.contents.find(content => content.id === id)
    }
}

export default connect(mapStateToProps)(ResultPage);
