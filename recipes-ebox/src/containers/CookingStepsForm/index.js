import React, { Component } from 'react';
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
}

class CookingStepsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newStep: ''
    }
  }

  handleNewStepChange = (e) => {
    this.setState({
      newStep: e.currentTarget.value
    })
  }

  handleAddCookingStep = (e) => {
    e.preventDefault();
    this.props.addCookingStep(this.state.newStep);
    this.setState({
      newStep: ''
    })
  }

  render() {
    return(
      <div className="cookingStepsForm-container">
        <form onSubmit={ this.handleAddCookingStep }>
          <TextField
            floatingLabelText="cooking step"
            underlineStyle={ styles.underlineStyle }
            floatingLabelStyle={ styles.floatingLabelStyle }
            floatingLabelFocusStyle={ styles.floatingLabelFocusStyle }
            inputStyle={ styles.inputStyle }
            hintStyle={ styles.hintStyle }
            onChange={ this.handleNewStepChange }
            value={ this.state.newStep }
          />
          <FlatButton label="Add Cooking Step" primary={true} onClick={ this.handleAddCookingStep } />
        </form>
      </div>
    );
  }

}

export default CookingStepsForm;
