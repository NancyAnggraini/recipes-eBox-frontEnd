import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import logo from '../../images/recipes-eBox-white.png';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';


class HomepageHeader extends Component {
  render() {
    return(
      <Toolbar className="homepageHeader-wrapper" >
        <ToolbarGroup>
          <img src={ logo } className="homepageHeader-logo" alt="logo" />
          <ToolbarTitle
            className="homepageHeader-title"
            text="Start your recipes collection!"
            />
        </ToolbarGroup>
        <ToolbarGroup>
          <Link to="/users/sign_in" className="homepageHeader-button">
            <RaisedButton
              label="SIGN IN"
              backgroundColor="#3498db"
              labelColor="#ecf0f1"
            />
          </Link>
          <Link to="/users/sign_up" className="homepageHeader-button">
            <RaisedButton
              label="SIGN UP"
              backgroundColor="#3498db"
              labelColor="#ecf0f1"
            />
          </Link>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default HomepageHeader
