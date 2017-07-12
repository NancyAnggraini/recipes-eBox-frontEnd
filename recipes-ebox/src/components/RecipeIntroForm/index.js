import React from 'react';
import './index.css';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';

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
  textareaStyle: {
    color: '#ffefd5',
  }
};

const RecipeIntroForm = ( props ) => (
  <div className="recipeIntroForm-container">
    <div className="recipeIntroForm-photo">
      <TextField
        hintText="enter photo url"
        floatingLabelText="photo url"
        underlineStyle={ styles.underlineStyle }
        floatingLabelStyle={ styles.floatingLabelStyle }
        floatingLabelFocusStyle={ styles.floatingLabelFocusStyle }
        inputStyle={ styles.inputStyle }
        hintStyle={ styles.hintStyle }
        onChange={ props.handlePhotoUrl }
        value={ props.photoUrl }
        />
      <FlatButton label="Upload Photo" primary={true} />
    </div>
    <div className="recipeIntroForm-subContainer">
      <TextField
        hintText="enter recipe weblink"
        floatingLabelText="reference link"
        underlineStyle={ styles.underlineStyle }
        floatingLabelStyle={ styles.floatingLabelStyle }
        floatingLabelFocusStyle={ styles.floatingLabelFocusStyle }
        inputStyle={ styles.inputStyle }
        hintStyle={ styles.hintStyle }
        onChange={ props.handleWeblink }
        value={ props.weblink }
        />
      <TextField
        hintText="enter short description"
        floatingLabelText="description"
        multiLine={true}
        rows={2}
        underlineStyle={ styles.underlineStyle }
        floatingLabelStyle={ styles.floatingLabelStyle }
        floatingLabelFocusStyle={ styles.floatingLabelFocusStyle }
        textareaStyle={ styles.textareaStyle }
        hintStyle={ styles.hintStyle }
        onChange={ props.handleDescription }
        value={ props.description }
      />
    </div>
  </div>
);

export default RecipeIntroForm;
