import React, { Component } from 'react';
import './index.css';
import logo from '../../images/recipes-eBox-white.png';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';


class HomepageHeader extends Component {
  render() {
    return(
      <Toolbar className="wrapper" >
        <ToolbarGroup>
          <img src={ logo } className="logo" alt="logo" />
          <ToolbarTitle
            className="title"
            text="Start your recipes collection!"
            />
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton
            className="button"
            label="SIGN IN"
            backgroundColor="#3498db"
            labelColor="#ecf0f1"
            />
          <RaisedButton
            className="button"
            label="SIGN UP"
            backgroundColor="#3498db"
            labelColor="#ecf0f1"
            />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default HomepageHeader
