import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { Paper } from 'material-ui';
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import { fetchSearchedRecipes } from '../../store/actions.js';

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
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    }
  }

  handleSearch = (e) => {
    console.log('searching');
    const query = e.currentTarget.value;
    this.setState({
      query: query,
    })
  }

  handleSubmit = (e) => {
    console.log('submitted');

    //needed so it doesn't reload everything again after pressing enter:
    e.preventDefault();

    this.props.dispatch(fetchSearchedRecipes(this.state.query));

    this.props.changeListTitle(this.state.query);

    //to reset the search:
    this.setState({
      query: '',
    })
  }

  render() {
    return(
      <Paper className="paper" zDepth={ 2 }>
        <h3>Find recipes:</h3>
        <form onSubmit={ this.handleSubmit }>
          <TextField
            hintText="enter recipe name / keyword"
            floatingLabelText="recipe name"
            underlineStyle={ styles.underlineStyle }
            floatingLabelStyle={ styles.floatingLabelStyle }
            floatingLabelFocusStyle={ styles.floatingLabelFocusStyle }
            inputStyle={ styles.inputStyle }
            hintStyle={ styles.hintStyle }
            onChange={ this.handleSearch }
            value={ this.state.query }
            />
          <RaisedButton
            className="searchButton"
            label="SEARCH"
            backgroundColor="#2c3e50"
            labelColor="#ffefd5"
            onClick={ this.handleSubmit }
            />
        </form>
      </Paper>
    );
  }
}

export default connect()(SearchBox);
