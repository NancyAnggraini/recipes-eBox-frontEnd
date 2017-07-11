import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from '../../images/recipes-eBox.png';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

class SmartHeader extends Component {
  render() {
    if(this.props.userId === undefined && this.props.firstName === undefined && this.props.lastName === undefined) {
      return(
        <Toolbar className="smartHeader-wrapper" >
          <ToolbarGroup>
            <Link to="/">
              <img src={ logo } className="logo" alt="logo" />
            </Link>
            <ToolbarTitle
              className="smartHeader-title"
              text={ "Hi, Stranger!" }
              />
          </ToolbarGroup>
        </Toolbar>
      );
    }

    return(
      <Toolbar className="smartHeader-wrapper" >
        <ToolbarGroup>
          <Link to="/">
            <img src={ logo } className="logo" alt="logo" />
          </Link>
          <Link to={"/users/" + this.props.userId } style={{ textDecoration: "none" }}>
            <ToolbarTitle
              className="smartHeader-title"
              text={ "Hi, " + this.props.firstName + " " + this.props.lastName + "!"}
              />
          </Link>
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton
            label={ this.props.buttonName }
            backgroundColor={ this.props.buttonColor }
            labelColor="#ecf0f1"
            />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default SmartHeader;
