import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { Link } from 'react-router-dom';
import './index.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 400,
    height: 360,
    overflowY: 'auto',
  },
};

class GalleryList extends Component {
  render() {
    if(this.props.currentUser === undefined) {
      return(
        <div className="gallery-list" style={ styles.root }>
          <GridList
            cellHeight={ 180 }
            style={ styles.gridList }
            >
            {this.props.recipes.map((recipe) => (
              <Link
                to={ "/recipes/" + recipe.id }
                style={{ textDecoration: "none" }}
                >
                <GridTile
                  key={ recipe.id }
                  title={ recipe.name }
                  subtitle={ <span>{ recipe.recipeOwner }</span> }
                  >
                  <img src={ recipe.photoUrl } alt={ recipe.name }/>
                </GridTile>
            </Link>
            ))}
          </GridList>
        </div>
      )
    }

    return(
      <div className="gallery-list" style={ styles.root }>
        <GridList
          cellHeight={ 180 }
          style={ styles.gridList }
          >
          {this.props.recipes.map((recipe) => (
            <Link
              to={"/users/" + this.props.currentUser.id + "/recipes/" + recipe.id }
              style={{ textDecoration: "none" }}
              >
              <GridTile
                key={ recipe.id }
                title={ recipe.name }
                subtitle={ <span>{ recipe.recipeOwner }</span> }
                >
                <img src={ recipe.photoUrl } alt={ recipe.name }/>
              </GridTile>
          </Link>
          ))}
        </GridList>
      </div>
    )
  }
};

export default GalleryList;
