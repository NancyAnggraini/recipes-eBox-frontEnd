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
};

class IngredientsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newIngredient: ''
    }
  }

  handleNewIngredientChange = (e) => {
    this.setState({
      newIngredient: e.currentTarget.value
    })
  }

  handleAddIngredient = (e) => {
    e.preventDefault();
    if(this.state.newIngredient.length > 0) {
      this.props.addIngredient(this.state.newIngredient);
    }
    this.setState({
      newIngredient: ''
    })
  }

  render() {
    return(
      <div className="ingredientsForm-container">
        <form onSubmit={ this.handleAddIngredient }>
          <TextField
            floatingLabelText="ingredient and quantity"
            underlineStyle={ styles.underlineStyle }
            floatingLabelStyle={ styles.floatingLabelStyle }
            floatingLabelFocusStyle={ styles.floatingLabelFocusStyle }
            inputStyle={ styles.inputStyle }
            hintStyle={ styles.hintStyle }
            onChange={ this.handleNewIngredientChange }
            value={ this.state.newIngredient }
          />
          <FlatButton label="Add Ingredient" primary={true} onClick={ this.handleAddIngredient }/>
        </form>
      </div>
    );
  }
}





export default IngredientsForm;
