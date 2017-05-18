import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import UserPage from '../components/UserPage.jsx';
import {addUser,deleteUser,updateUser,invokeGetAllUsers} from '../actions/UserActions.js';

const mapStateToProps = (state) => ({
  ajaxFetching: state.userStore.ajaxFetching,
  users: state.userStore.users,
  selectedUser: state.userStore.selectedUser,
  user: state.userStore.user
});

function mapDispatchToProps(dispatch){
    return bindActionCreators({invokeGetAllUsers: invokeGetAllUsers,
                               deleteUser: deleteUser,
                               addUser: addUser,
                               updateUser: updateUser
                              },
                              dispatch);
}

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);

export default UserContainer;
