import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import MainContainer from '../../components/MainContainer';
import Header from '../../components/Header';
import SignUpForm from '../../containers/SignUpForm';
import SignUpPhoto from '../../components/SignUpPhoto';

class SignUp extends Component {
  render() {
    return(
      <MainContainer>
        <Header />
        <div className="body-container">
          <SignUpForm />
          <SignUpPhoto />
        </div>
      </MainContainer>
    );
  }
}

export default connect()(SignUp);
