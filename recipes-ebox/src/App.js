import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';

class App extends Component {
  // MuiThemeProvider needs to be the outermost for the routing to work correctly
  render() {
    return(
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
