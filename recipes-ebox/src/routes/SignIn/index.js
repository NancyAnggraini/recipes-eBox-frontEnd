import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import MainContainer from '../../components/MainContainer';
import Header from '../../components/Header';
import SignInForm from '../../containers/SignInForm';
import Photos from '../../components/SignInPhoto';

class SignIn extends Component {
  render() {
    return(
      <MainContainer>
        <Header />
        <div className="body-container">
          <SignInForm />
          <Photos />
        </div>
      </MainContainer>
    );
  }
}

export default connect()(SignIn);
