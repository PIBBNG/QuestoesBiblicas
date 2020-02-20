import React from 'react';
import { reduxForm, Field } from 'redux-form';

export const initialFormName = "initial_form";

const Button = (props) => {
    const className = props.className || '';
    return (
        <button
            {...props}
            className={`btn btn-outline-secondary btn-sm ${className}`}
        >
            {props.children}
        </button>
    );
};

const RenderField = ({label, children, ...props }) => {
    const display = {display:props['display']}
    return (
        <div className='form-group row mb-0'>
            <div className='col-4'>
                <label>{label}</label>
            </div>
            <div className='col input-group input-group-sm' style={display}>
                <Field className='form-control' {...props}>
                    { children }
                </Field>
            </div>
        </div>
    )
}


class Form extends React.Component {
    
    render() {
        const { questions } = this.props;
        console.log(questions);
        return (
            <form onSubmit={this.props.handleSubmit}>
                <RenderField label='Questionário:' name='questions' component='select'>
                {questions.map((value) => <option key={value['id']} value={value['title']}>{value['title']}</option>)}
                </RenderField>
                <br></br>
                <RenderField label='Equipe 1:' name='team1' component='input' type='text'/>
                <RenderField label='Equipe 2:' name='team2' component='input' type='text'/>
                <RenderField label='Equipe 3:' name='team3' component='input' type='text'/>
                <br></br>
                <Button className='mr-2'>Enviar</Button>
                <Button onClick={() => this.props.reset()}>Limpar</Button>
            </form>
        );
    }
}

function submit(values, dispatch){
    console.log(values);
    console.log('olá!');
}

class InitialForm extends React.Component {
    render(){
        const { acampsQuestions } = this.props;
        return(    
            <div className='card shadow'>
                <div className='card-header text-center'>
                    <h5 className="card-title">Questionário Bíblico!</h5>
                </div>
                <div className='card-body'>
                    <Form
                        questions={acampsQuestions}
                    />
                </div>
            </div>
        )
    }

}

const Component = reduxForm({
    form: 'initQuestions',
    onSubmit: submit,
    destroyOnUnmount: false,
})(InitialForm);

export default Component