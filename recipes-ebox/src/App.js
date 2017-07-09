import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './routes/Home';
import store from './store';

class App extends Component {
  // MuiThemeProvider needs to be the outermost for the routing to work correctly
  render() {
    return(
      <Provider store={ store }>
        <MuiThemeProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={ Home } />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
