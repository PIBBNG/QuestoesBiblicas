import React from 'react';
import { RenderField, Button } from '../../Home/components/Form';
import ChooseQuestion from '../Containers/ChooseQuestion';

class Navigation extends React.Component {
    render(){
        return(
            <div className="card">
                <div className="card-header text-center">
                    <p><b>Perguntas</b></p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <ChooseQuestion/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation