import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import User from './routes/User';
import Recipe from './routes/Recipe';
import NewRecipe from './routes/NewRecipe';
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
              <Route exact path="/users/sign_in" component={ SignIn } />
              <Route exact path="/users/sign_up" component={ SignUp } />
              <Route exact path="/users/:user_id" component={ User } />
              <Route exact path="/users/:user_id/recipes/:recipe_id" component={ Recipe } />
              <Route exact path="/recipes/:recipe_id" component={ Recipe } />
              <Route exact path="/users/:user_id/new_recipe" component={ NewRecipe } />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
