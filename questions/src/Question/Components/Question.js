import React from 'react';
import Navigation from './Navigation'
import Card from './Card'

class Component extends React.Component {
    render(){
        return(
            <div className='container-fluid'>
                <div className="row mt-5 justify-content-md-center" style={{marginTop: '+2%'}}>
                    <div className="col col-sm-auto">
                        <Card/>
                    </div>
                </div>
                <div className="row justify-content-md-center" style={{marginTop: '+5%'}}>
                    <div className="col">
                        <Navigation/>
                    </div>
                    <div className="col">

                    </div>
                    <div className="col">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Component