import React from 'react';
import InitialForm from './containers/Form';

export default class Home extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        ready: false,
      }
    }
  
    render() {
      return (
        <div class="container-fluid">
          <div class="row mt-5 justify-content-md-center">  
                <div className='col-md-auto'>
                  <InitialForm />
                </div>
            </div>
        </div>
      )
    }
  
  }