import React from 'react';
import Navigation from './Navigation'
import Card from './Card'

class Component extends React.Component {
    render(){
        return(
            <div className='container-fluit h-auto'>
                <div className="row justify-content-md-center" style={{marginTop: '+2%'}}>
                    <div className="col-md-auto">
                        <Navigation/>
                    </div>
                </div>
                <div className="row h-100" style={{marginTop: '+5%'}}>
                    <div className="col">
                        <Card/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Component