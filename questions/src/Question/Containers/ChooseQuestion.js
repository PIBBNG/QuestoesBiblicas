import React from 'react';
import { connect } from 'react-redux';
import Component, { chooseQuestionFormName } from '../Components/ChooseQuestion';
import { getFormValues } from 'redux-form/immutable';

class Container extends React.Component {
    render(){
        console.log(this.state)
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
        questionId: 0,
        formValues: getFormValues(chooseQuestionFormName)(state),
    };
};

export default connect(mapStateToProps)(Container)