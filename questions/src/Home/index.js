import React from 'react';
import InitialForm from './containers/Form';

const box = {
  position: 'fixed',
  top: '40%',
  left: '23%',
  width: '100%',
  height: '100%',
  marginTop: '-15%',
 }

export default class Home extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        ready: false,
      }
    }
  
    render() {
      return (
        <div style={box}>
          <div className='container-fluit mt--6'>
              <div className='row'>  
                  <div className='col-md-auto'>
                    <InitialForm />
                  </div>
              </div>
          </div>
        </div>
      )
    }
  
  }