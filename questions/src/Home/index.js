import React, { Fragment } from 'react';
import InitialForm from './Form';

export default class Home extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        ready: false,
      }
    }
  
    render() {
      return (
        <div>
          <InitialForm />
        </div>
      )
    }
  
  }