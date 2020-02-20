import React from 'react';
import { connect } from 'react-redux';
import Component from '../Components/Question'

class Container extends React.Component{
    render() {
        return (
            <Component
                {...this.props}
                {...this.state}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        session: state.home.session,
        teams: state.home.teams
    };
};

export default connect(mapStateToProps)(Container);