import React from 'react';
import Paper from 'material-ui/Paper';
import openBox from '../../images/openBox.jpg';
import lock from '../../images/lock.jpg';

const innerStyle = {
  height: 300,
  width: 300,
  margin: 50,
  display: 'inline-block',
  overflowX: 'hidden',
  overflowY: 'hidden',
  opacity: .99,
};

const outerStyle = {
  height: 400,
  width: 400,
  margin: 0,
  marginLeft: -130,
  display: 'inline-block',
  overflowX: 'hidden',
  overflowY: 'hidden',
};

const SignInPhoto = () => {
  return(
    <div style={{ margin: "0 auto", display: "flex"}}>
      <Paper style={ innerStyle } zDepth={4} circle={true}>
        <img
          src={ openBox }
          width="350"
          height="300"
          alt="open the box"
          />
      </Paper>
      <Paper style={ outerStyle } zDepth={4} circle={true}>
        <img
          src={ lock }
          width="450"
          height="400"
          alt="lock and key "
          />
      </Paper>
    </div>
  );
}

export default SignInPhoto;

// <h3>Welcome back!</h3>
