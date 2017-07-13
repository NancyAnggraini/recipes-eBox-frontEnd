import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import logo from '../../images/recipes-eBox-white.png';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';

const Header = () => (
  <Toolbar className="wrapper" >
    <ToolbarGroup>
      <Paper className="logo-wrapper" zDepth={ 2 }>
        <Link to="/">
          <img src={ logo } className="logo" alt="logo" />
        </Link>
      </Paper>
      <ToolbarTitle
        className="title"
        text="Unlock your eBox!"
        />
    </ToolbarGroup>
  </Toolbar>
);

export default Header;
