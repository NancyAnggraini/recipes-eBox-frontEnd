import React from 'react';
import './index.css';
import welcomeImage from '../../images/welcome.png';

const styles = {
  borderRadius: 50,
  border: '5px solid #708090',
  overflowX: 'hidden',
  overflowY: 'hidden',
  width: 500,
  height: 350,
  marginTop: 120,
  marginLeft: 'auto',
  marginRight: 'auto'
};

const SignUpPhoto = () => {
  return(
    <div style={ styles }>
      <img
        className="signUp-photo"
        src={ welcomeImage }
        width="500"
        height="350"
        alt="welcome"
      />
    </div>
  );
}

export default SignUpPhoto;
