import React from 'react';
import { connect } from 'react-redux';
import Component, { initialFormName } from '../components/Form';
import { getFormValues } from 'redux-form';
import { fetchAcampsQuestions } from '../api';
import { setAcampsQuestions } from '../actions';

class Container extends React.Component {

    async componentDidMount(){
        const { dispatch } = this.props;

        await fetchAcampsQuestions().then((response) => {
            dispatch(setAcampsQuestions(response.data));
        }).catch(() => {
            dispatch(setAcampsQuestions([]));  
        });
    }
    render(){
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
        acampsQuestions: state.home.acampsQuestions,
        formValues: getFormValues(initialFormName)(state)
    };
};

export default connect(mapStateToProps)(Container)