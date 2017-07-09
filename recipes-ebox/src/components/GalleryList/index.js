import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
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

const GalleryList = ({ recipes }) => (
  <div className="gallery-list" style={ styles.root }>
    <GridList
      cellHeight={ 180 }
      style={ styles.gridList }
    >
      {recipes.map((recipe) => (
        <GridTile
          key={ recipe.id }
        >
          <img src={ recipe.photoUrl } alt={ recipe.name }/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GalleryList;
