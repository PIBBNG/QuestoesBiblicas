import React from 'react';
import Form from '../Components/Form'

class Card extends React.Component {
    render(){
        return(
            <div className='card'>
                <div className='card-header text-center'>
                    <h5 className='card-title'>Questão X</h5>
                </div>
                    <div className='card-body'>
                        <Form/>
                    </div>
                <div className='card-footer text-muted text-center'>
                    Retiro Batista Bíblico 2020
                </div>
            </div>
        )
    }
}

export default Card