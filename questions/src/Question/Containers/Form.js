import React from 'react';
import { connect } from 'react-redux';
import Component, {questionFormName} from '../Components/Form';
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
        selectedOption: 'A',
        formValues: getFormValues(questionFormName)(state),
    };
};

export default connect(mapStateToProps)(Container)