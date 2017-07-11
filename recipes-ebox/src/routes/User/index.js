import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import MainContainer from '../../components/MainContainer';
import SmartHeader from '../../containers/SmartHeader';
import SearchBox from '../../containers/SearchBox';
import RecipeList from '../../components/RecipeList';
import { fetchCurrentUser } from '../../store/actions.js';
import { fetchCurrentUserRecipes } from '../../store/actions.js';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTitle: 'Check out your collection:',
      noResults: 'No results. Please search again.',
      search: false
    }
  }

  changeListTitle = (query) => {
    if(query.length > 0) {
      this.setState({
        listTitle: 'Here are the results for "' + query + '":',
      });
    } else {
      this.setState({
        listTitle: 'Check out your collection:',
      });
    }
  }

  changeSearchState = (param) => {
      this.setState({
        search: param
      })
  }

  componentDidMount() {
    this.props.dispatch(fetchCurrentUser(this.props.match.params.user_id));
    this.props.dispatch(fetchCurrentUserRecipes(this.props.match.params.user_id));
  }

  render() {
    return(
      <MainContainer>
        <SmartHeader
          userId={ this.props.currentUser.id }
          firstName={ this.props.currentUser.firstName }
          lastName={ this.props.currentUser.lastName }
          buttonName="create recipe"
          buttonColor="#3498db"
          />
        <div className="user-body-container">
          <div className="user-search-container">
            <SearchBox
              searchBoxTitle="Search your collection:"
              changeListTitle={ this.changeListTitle }
              changeSearchState={ this.changeSearchState }
              checkSearch={ this.state.search }
              />
            <h3>{ 'You currently have ' + this.props.currentUserRecipes.length + ' recipes.' }</h3>
          </div>
          <div className="user-list-gallery-container">
            {
              (this.state.search === false) &&
              <div>
                <h1>{ this.state.listTitle }</h1>
                <RecipeList recipes={ this.props.currentUserRecipes }/>
              </div>
            }
            {
              (this.state.search === true) && (this.props.searchedRecipes.length > 0) &&
              <div>
                <h1>{ this.state.listTitle }</h1>
                <RecipeList recipes={ this.props.searchedRecipes }/>
              </div>
            }
            {
              (this.state.search === true) && (!this.props.searchedRecipes.length) &&
              <div>
                <h1>{ this.state.noResults }</h1>
              </div>
            }
          </div>
        </div>
      </MainContainer>
    );
  }
}

const mapStateToProps = (state) => (
  {
    currentUser: state.currentUser,
    currentUserRecipes: state.currentUserRecipes,
    searchedRecipes: state.recipes.filter( (recipe) => recipe.recipeOwner === state.currentUser.username)
  }
)

export default connect(mapStateToProps)(User);
