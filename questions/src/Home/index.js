import React from 'react';

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
          <p>
            Página Inicial :)
          </p>
        </div>
      )
    }
  
  }