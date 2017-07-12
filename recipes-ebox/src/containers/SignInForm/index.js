import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
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
    color: '#7f8c8d',
  },
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleEmail = (e) => {
    console.log('typing email');
    const email = e.currentTarget.value;
    this.setState({
      email: email,
    })
  }

  handlePassword = (e) => {
    console.log('typing password');
    const password = e.currentTarget.value;
    this.setState({
      password: password,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit sign in');
  }

  render() {
    return(
      <Paper className="signInPaper" zDepth={ 2 }>
        <h2>Sign in:</h2>
        <form onSubmit={ this.handleSubmit }>
          <TextField
            hintText="enter email"
            floatingLabelText="email"
            underlineStyle={ styles.underlineStyle }
            floatingLabelStyle={ styles.floatingLabelStyle }
            floatingLabelFocusStyle={ styles.floatingLabelFocusStyle }
            inputStyle={ styles.inputStyle }
            hintStyle={ styles.hintStyle }
            onChange={ this.handleEmail }
            value={ this.state.email }
            />
          <TextField
            hintText="enter password"
            floatingLabelText="password"
            underlineStyle={ styles.underlineStyle }
            floatingLabelStyle={ styles.floatingLabelStyle }
            floatingLabelFocusStyle={ styles.floatingLabelFocusStyle }
            inputStyle={ styles.inputStyle }
            hintStyle={ styles.hintStyle }
            onChange={ this.handlePassword }
            value={ this.state.password }
            />
          <RaisedButton
            className="submitButton"
            type="submit"
            label="Submit"
            backgroundColor="#2c3e50"
            labelColor="#ffefd5"
            onClick={ this.handleSubmit }
            />
        </form>
        <p className="sign-up-link">Dont have an account? Sign up <Link to="/users/sign_up" className="link">here</Link>.</p>
      </Paper>
    );
  }
}

export default SignInForm;
