import React from 'react';
import { reduxForm, Field } from 'redux-form';

export const questionFormName = "question_form";

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

const Alternative = ({ id, text, children, ...props}) => {
    const teste = ""
    return(
        <div key={id} className={"list-group-item list-group-item-action "+teste} active="true">
            <div className='row mb-0'>
                <div className='col'>
                    <p>{text}</p>
                </div>
                <div className='col'>
                    <Field hidden={false} className='form-control' {...props}>
                        {children}
                    </Field>
                </div>
            </div> 
        </div>
    )
}

class Form extends React.Component {
    render(){
        const alternatives = [
            {
                text:"Essa aqui",
                id: 0,
                validate:true
            },
            {
                text:"Nop",
                id: 1,
                validate:false
            },
            {
                text:"Not",
                id: 2,
                validate:false
            },
            {
                text:"Naah",
                id: 3,
                validate:false
            },
        ]
        console.log(this.state)
        return(
            <div className="container-fluid">
                <form onSubmit={this.props.handleSubmit}>
                    <div className='row'>
                        <ul>
                            <li>
                                <h5>No livro de Ezequiel Deus fala sobre duas prostitutas Oola e Oolibá, Ele diz que essas prostitutas são referencias a duas cidades , quais são elas?</h5>
                            </li>
                        </ul>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='list-group list-group-sm' id='list-tab'>
                                <Alternative 
                                    text={"A) " + alternatives[0].text} 
                                    component='input' 
                                    type='radio'
                                    id={alternatives[0].id} 
                                    name='A' 
                                    value='A'
                                    checked={this.props.selectedOption === 'A'}
                                />
                                <Alternative 
                                    text={"B) " + alternatives[1].text} 
                                    component='input' 
                                    type='radio'
                                    id={alternatives[1].id}
                                    name='B' 
                                    value='B'
                                    checked={this.props.selectedOption === 'B'}
                                />
                                <Alternative 
                                    text={"C) " + alternatives[2].text} 
                                    component='input' 
                                    type='radio' 
                                    id={alternatives[2].id}
                                    name='C' 
                                    value='C'
                                    checked={this.props.selectedOption === 'C'}
                                />
                                <Alternative 
                                    text={"D) " + alternatives[3].text} 
                                    component='input' 
                                    type='radio'
                                    id={alternatives[3].id} 
                                    name='D' 
                                    value='D'
                                    checked={this.props.selectedOption === 'D'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row text-center' style={{marginTop: '+2%'}}>
                        <div className='col'>
                            <Button className='mr-2'>Voltar</Button>
                        </div>
                        <div className='col'>
                            <Button type='submit' className='mr-2'>Enviar</Button>
                        </div>
                        <div className='col'>
                            <Button className='mr-2'>Pular</Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function submit(values, dispatch, props){
    console.log("SUBMIT!!");
    console.log(values)
}

const QuestionForm = reduxForm({
    form: questionFormName,
    onSubmit: submit,
    destroyOnUnmount: false,
    initialState: {
        selectedOption: 'A',
    }
})(Form)

export default QuestionForm;