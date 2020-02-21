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
    <div className='container-fluid'>
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path='/question' component={Question} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
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