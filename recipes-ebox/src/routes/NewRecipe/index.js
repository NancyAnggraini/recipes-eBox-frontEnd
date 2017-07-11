import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import MainContainer from '../../components/MainContainer';
import SmartHeader from '../../containers/SmartHeader';
import { fetchCurrentUser } from '../../store/actions.js';

class NewRecipe extends Component {

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
