import React, { Component } from 'react';
import { connect } from 'react-redux';

class HistoryPage extends Component {
    render() {
        const { history } = this.props;
        return (
            <div>
                {
                history.map(item => {
                    return (
                        <ul key={item.id}>
                            {item}
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
