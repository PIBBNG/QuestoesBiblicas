import React from 'react';
import Navigation from './Navigation'

class Component extends React.Component {
    render(){
        return(
            <div className='container-fluit h-auto'>
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <Navigation />
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row h-100">
                    <div className="col">
                        <p>lateral</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Component



// import React from 'react';

// class Component extends React.Component {
//     render(){
//         return(
//             <div className='card'>
//                 <p>Questões!</p>
//             </div>
//         )
//     }
// }

// export default Component