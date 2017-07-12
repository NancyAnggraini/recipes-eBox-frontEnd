import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import MainContainer from '../../components/MainContainer';
import SmartHeader from '../../containers/SmartHeader';
import RecipeIntroForm from '../../components/RecipeIntroForm';
import IngredientsForm from '../../containers/IngredientsForm';
import NewIngredientList from '../../components/NewIngredientList';
import CookingStepsForm from '../../containers/CookingStepsForm';
import NewCookingStepList from '../../components/NewCookingStepList';
import { fetchCurrentUser } from '../../store/actions.js';
import Paper from 'material-ui/Paper';
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

class NewRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      photoUrl: '',
      weblink: '',
      description: '',
      ingredients: [],
      cookingSteps: []
    }
  }

  handleName = (e) => {
    console.log('typing recipe name');
    const name = e.currentTarget.value;
    this.setState({
      name: name,
    })
  }

  handlePhotoUrl = (e) => {
    console.log('typing photo url');
    const photoUrl = e.currentTarget.value;
    this.setState({
      photoUrl: photoUrl,
    })
  }

  handleWeblink = (e) => {
    console.log('typing weblink');
    const weblink = e.currentTarget.value;
    this.setState({
      weblink: weblink,
    })
  }

  handleDescription = (e) => {
    console.log('typing description');
    const description = e.currentTarget.value;
    this.setState({
      description: description,
    })
  }

  addIngredient = (newIngredient) => {
    const newIngredients = [...this.state.ingredients];
    newIngredients.push(newIngredient);
    this.setState({
      ingredients: newIngredients
    })
  }

  addCookingStep = (newStep) => {
    const newCookingSteps = [...this.state.cookingSteps];
    newCookingSteps.push(newStep);
    this.setState({
      cookingSteps: newCookingSteps
    })
  }

  componentDidMount() {
    this.props.dispatch(fetchCurrentUser(this.props.match.params.user_id));
  }

  render() {
    return(
      <MainContainer>
        <SmartHeader
          userId={ this.props.currentUser.id }
          firstName={ this.props.currentUser.firstName }
          lastName={ this.props.currentUser.lastName }
          buttonName="save recipe"
          buttonColor="#c0392b"
          />
        <Paper className="newRecipe-container">
          <div className="newRecipe-title">
            <TextField
              hintText="enter recipe name"
              floatingLabelText="recipe name"
              underlineStyle={ styles.underlineStyle }
              floatingLabelStyle={ styles.floatingLabelStyle }
              floatingLabelFocusStyle={ styles.floatingLabelFocusStyle }
              inputStyle={ styles.inputStyle }
              hintStyle={ styles.hintStyle }
              onChange={ this.handleName }
              value={ this.state.name }
              />
          </div>
          <div className="newRecipe-half-container">
            <div className="newRecipe-half">
              <RecipeIntroForm
                photoUrl={ this.state.photoUrl }
                handlePhotoUrl={ this.handlePhotoUrl }
                handleWeblink={ this.handleWeblink }
                weblink={ this.state.weblink }
                handleDescription={ this.handleDescription }
                description={ this.state.description }
                />
              <IngredientsForm addIngredient={ this.addIngredient }/>
              <NewIngredientList ingredients={ this.state.ingredients } />
            </div>
            <div className="divider"></div>
            <div className="newRecipe-half">
              <CookingStepsForm addCookingStep={ this.addCookingStep }/>
              <NewCookingStepList cookingSteps={ this.state.cookingSteps } />
            </div>
          </div>
        </Paper>
      </MainContainer>
    );
  }
}

const mapStateToProps = (state) => (
  {
    currentUser: state.currentUser
  }
)

export default connect(mapStateToProps)(NewRecipe);
