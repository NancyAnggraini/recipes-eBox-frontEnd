import React, { Component } from 'react';
import './index.css';
import { Paper } from 'material-ui';
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  inputStyle: {
    color: '#ffefd5',
  },
  hintStyle: {
    color: '7f8c8d',
  },
};

class SearchBox extends Component {

  render() {
    return(
      <Paper className="paper" zDepth={ 2 }>
        <h3>Find recipes:</h3>
        <form>
          <TextField
            hintText="enter recipe name / keyword"
            floatingLabelText="recipe name"
            underlineStyle={ styles.underlineStyle }
            floatingLabelStyle={ styles.floatingLabelStyle }
            floatingLabelFocusStyle={ styles.floatingLabelFocusStyle }
            inputStyle={ styles.inputStyle }
            hintStyle={ styles.hintStyle }
            />
          <RaisedButton
            className="searchButton"
            label="SEARCH"
            backgroundColor="#2c3e50"
            labelColor="#ffefd5"
            />
        </form>
      </Paper>
    );
  }
}

export default SearchBox;
