import React, { Component } from 'react';
import './index.css';
import MainContainer from '../../components/MainContainer';
import About from '../../components/About';
import HomepageHeader from '../../containers/HomepageHeader';
import SearchBox from '../../containers/SearchBox';
import RecipeList from '../../components/RecipeList';
import Footer from '../../components/Footer';

class Home extends Component {
  render() {
    return(
      <MainContainer>
        <HomepageHeader />
        <div className="body-container">
          <div className="search-info-container">
            <SearchBox />
            <About />
          </div>
          <div className="list-gallery-container">
            <h1>Check out what we have:</h1>
            <RecipeList />
          </div>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

export default Home;
