import React from 'react';
import { reduxForm } from 'redux-form';
import { RenderField, Button, initialFormName } from '../../Home/components/Form';

export const chooseQuestionFormName = 'question_form';

class ChooseQuestion extends React.Component {
    render(){
        return (
            <form onSubmit={this.props.handleSubmit}>
                <RenderField
                    component="input"
                    name="question"
                    type="number"
                    label="N°"
                />
                <Button type='submit' className='mr-2'>Enviar</Button>
            </form>
        )
    }
}

function submit(values, dispatch, props){
    console.log("ihuuu")
    console.log(values)
}

const Component = reduxForm({
    form: initialFormName,
    onSubmit: submit,
    destroyOnUnmount: false,
})(ChooseQuestion)

export default Component;