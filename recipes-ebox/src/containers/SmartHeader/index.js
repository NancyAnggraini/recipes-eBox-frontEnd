import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from '../../images/recipes-eBox.png';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionProfile from 'material-ui/svg-icons/action/account-circle';

class SmartHeader extends Component {
  render() {
    if(
      this.props.userId === undefined &&
      this.props.firstName === undefined &&
      this.props.lastName === undefined
    ) {
        return(
          <div>
            <Toolbar className="smartHeader-wrapper" >
              <ToolbarGroup>
                <Paper className="logo-paper" zDepth={ 2 }>
                  <Link to="/">
                    <img src={ logo } className="logo" alt="logo" />
                  </Link>
                </Paper>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <ToolbarTitle
                    className="smartHeader-title"
                    text={ "Hi, Stranger!" }
                    />
                </Link>
              </ToolbarGroup>
              <ToolbarGroup>
                <Link to="/">
                  <ActionHome />
                </Link>
              </ToolbarGroup>
            </Toolbar>
          </div>
        );
    }

    return(
      <div>
        <Toolbar className="smartHeader-wrapper" >
          <ToolbarGroup>
            <Paper className="logo-paper" zDepth={ 2 }>
              <Link to="/">
                <img src={ logo } className="logo" alt="logo" />
              </Link>
            </Paper>
            <Link to={"/users/" + this.props.userId } style={{ textDecoration: "none" }}>
              <ToolbarTitle
                className="smartHeader-title"
                text={ "Hi, " + this.props.firstName + " " + this.props.lastName + "!"}
                />
            </Link>
          </ToolbarGroup>
          <ToolbarGroup>
            <Link to="/">
              <ActionHome />
            </Link>
            <Link to={"/users/" + this.props.userId }>
              <ActionProfile className="profile-icon" />
            </Link>
            <ToolbarSeparator />
            <RaisedButton
              label={ this.props.buttonName }
              backgroundColor={ this.props.buttonColor }
              labelColor="#ecf0f1"
              onClick={ this.props.handleButtonClick }
              />
            <Link to="/">
              <RaisedButton
                label="sign out"
                backgroundColor={ this.props.buttonColor }
                labelColor="#ecf0f1"
                />
            </Link>
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

export default SmartHeader;
