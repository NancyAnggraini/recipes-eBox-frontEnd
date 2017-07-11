import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import MainContainer from '../../components/MainContainer';
import SmartHeader from '../../containers/SmartHeader';
import RecipeIntro from '../../components/RecipeIntro';
import Ingredients from '../../components/Ingredients';
import CookingSteps from '../../components/CookingSteps';
import { fetchCurrentUser, fetchRecipe } from '../../store/actions.js';
import Paper from 'material-ui/Paper';

class Recipe extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCurrentUser(this.props.match.params.user_id));
    this.props.dispatch(fetchRecipe(this.props.match.params.recipe_id));
  }

 render() {
   return(
      <div>
      {
        (this.props.recipe !== undefined) &&
        <MainContainer>
          <SmartHeader
            userId={ this.props.currentUser.id }
            firstName={ this.props.currentUser.firstName }
            lastName={ this.props.currentUser.lastName }
            buttonName="edit recipe"
            buttonColor="#1abc9c"
            />
          <Paper className="recipe-body-container">
            <div className="recipe-title">
              <h2>{ this.props.recipe.name }</h2>
            </div>
            <div className="recipe-half-container">
              <div className="recipe-half">
                <RecipeIntro recipe={ this.props.recipe }/>
                <Ingredients ingredients={ this.props.recipe.ingredients }/>
              </div>
              <div className="divider"></div>
              <div className="recipe-half">
                <CookingSteps cookingSteps={ this.props.recipe.cookingMethods }/>
              </div>
            </div>
          </Paper>
        </MainContainer>
      }
      </div>
   );
 }
}

const mapStateToProps = (state) => (
  {
    currentUser: state.currentUser,
    recipe: state.recipes[0]
  }
)

export default connect(mapStateToProps)(Recipe);
