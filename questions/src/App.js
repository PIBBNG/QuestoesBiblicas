import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from './store';
import { Helmet } from 'react-helmet';
import Home from './Home';
import Question from './Question';
import history from './history';

const Router = () => {
  return (
    <BrowserRouter history={history}>
      <div className='container-fluid'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/question' component={Question} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {};
}

const ConnectedRouter = connect(mapStateToProps)(Router);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ready: false,
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Helmet>
          <style>{'body { background-color: dodgerblue;}'}</style>
        </Helmet>
        <ConnectedRouter />
      </Provider>
    )
  }

}