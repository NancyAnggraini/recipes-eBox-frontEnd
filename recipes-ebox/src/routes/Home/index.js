import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import MainContainer from '../../components/MainContainer';
import About from '../../components/About';
import HomepageHeader from '../../containers/HomepageHeader';
import SearchBox from '../../containers/SearchBox';
import RecipeList from '../../components/RecipeList';
import { fetchRecipes } from '../../store/actions.js';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTitle: 'Check out what we have:',
      noResults: 'No results. Please search again.'
    }
  }

  changeListTitle = (query) => {
    if(query.length > 0) {
      this.setState({
        listTitle: 'Here are the results for "' + query + '":',
      });
    } else {
      this.setState({
        listTitle: 'Check out what we have:',
      });
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() {
    console.log(this.props);
    if (!this.props.recipes.length) {
      return(
        <MainContainer>
          <HomepageHeader />
          <div className="body-container">
            <div className="search-info-container">
              <SearchBox changeListTitle={ this.changeListTitle }/>
              <About />
            </div>
            <div className="list-gallery-container">
              <h1>{ this.state.noResults }</h1>
            </div>
          </div>
        </MainContainer>
      );
    }

    return(
      <MainContainer>
        <HomepageHeader />
        <div className="body-container">
          <div className="search-info-container">
            <SearchBox changeListTitle={ this.changeListTitle }/>
            <About />
          </div>
          <div className="list-gallery-container">
            <h1>{ this.state.listTitle }</h1>
            <RecipeList recipes={ this.props.recipes }/>
          </div>
        </div>
      </MainContainer>
    );
  }
}

const mapStateToProps = (state) => (
  {
    recipes: state.recipes
  }
)

export default connect(mapStateToProps)(Home);
