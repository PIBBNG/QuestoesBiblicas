import React from 'react';

class Card extends React.Component {
    render(){
        return(
            <div className='card'>
                <div className='card-header text-center'>
                    <h5 class='card-title'>Questão X</h5>
                </div>
                    <div className='card-body'>
                        <div className='row'>
                        </div>
                    </div>
                <div class='card-footer text-muted text-center'>
                    Retiro Batista Bíblico 2020
                </div>
            </div>
        )
    }
}

export default Card