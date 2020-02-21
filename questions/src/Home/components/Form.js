import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { createSession } from '../api';
import { setNewSession } from '../actions';
import history from '../../history'

export const initialFormName = "initial_form";

export const Button = (props) => {
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

export const RenderField = ({label, children, ...props }) => {
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
    
    handleSubmit = (values) => {
        console.log('This values', values)
        // this.props.history.push('/question');
    }


    render() {
        const { questions } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <RenderField label='Questionário:' name='questions' component='select'>
                    <option key={-1} value={""}>Selecione um questionário</option>
                    {questions.map((value) => <option key={value['id']} value={value['title']}>{value['title']}</option>)}
                </RenderField>
                <br></br>
                <RenderField label='Equipe 1:' name='team1' component='input' type='text'/>
                <RenderField label='Equipe 2:' name='team2' component='input' type='text'/>
                <RenderField label='Equipe 3:' name='team3' component='input' type='text'/>
                <br></br>
                <Button type='submit' className='mr-2'>Enviar</Button>
                <Button onClick={() => this.props.reset()}>Limpar</Button>
            </form>
        );
    }
}

function submit(values, dispatch, props){
    console.log(values);
    const { questions, team1, team2, team3 } = values;
    var teams_set = []
    if(team1){
        teams_set.push(team1.replace(" ", "-"));
    }
    if(team2){
        teams_set.push(team2.replace(" ", "-"));
    }
    if(team3){
        teams_set.push(team3.replace(" ", "-"));
    }

    const params = {
        'acampsQuestions': questions,
        'teams': teams_set,
    }

    return createSession(params).then((response) => {
        dispatch(setNewSession(response.data));
        history.push('/question')
        window.location.reload();
    }).catch(() => {
        dispatch(setNewSession({}));  
    });

}

const InitialForm = reduxForm({
    form: initialFormName,
    onSubmit: submit,
    destroyOnUnmount: false,
})(Form);

class Component extends React.Component {
    render(){
        const { acampsQuestions } = this.props;
        return(    
            <div className='card shadow'>
                <div className='card-header text-center'>
                    <h5 className="card-title">Questionário Bíblico!</h5>
                </div>
                <div className='card-body card-responsive-sm'>
                    <InitialForm
                        {...this.props}
                        questions={acampsQuestions}
                    />
                </div>
                <div className='card-footer text-muted text-center'>
                    Retiro Batista Bíblico 2020
                </div>
            </div>
        )
    }

}


export default Component