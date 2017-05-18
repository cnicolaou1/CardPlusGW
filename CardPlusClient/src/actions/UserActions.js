export const UserActionTypes={
  ADD_USER: 'ADD_USER',
  DELETE_USER: 'DELETE_USER',
  UPDATE_USER: 'UPDATE_USER',
  GET_ALL_USERS: 'GET_USERS',
  RECEIVE_ALL_USERS: 'RECEIVE_ALL_USERS',

  USER_ADDED: 'USER_ADDED',
  USER_UPDATED: 'USER_UPDATED',
  USER_DELETED: 'USER_DELETED'
};

export function addUser(user) {
  return {
    type: UserActionTypes.ADD_USER,
    user: user
  };
}

export function deleteUser(id) {
  return {
    type: UserActionTypes.DELETE_USER,
    id: id
  };
}

export function updateUser(user){
  return {
    type: UserActionTypes.UPDATE_USER,
    user: user
  };
}

export function getAllUsers(){
  return {
    type: UserActionTypes.GET_ALL_USERS
  };
}

export function receiveAllUsers(users){
  return {
    type: UserActionTypes.RECEIVE_ALL_USERS,
    users: users
  };
}
export function invokeGetAllUsers(){
  return function(dispatch){
    dispatch(getAllUsers());

    return fetch('http://localhost:8000/CardPlusWeb/rest/user/getAllUsers')
            .then(response => response.json())
            .then(json => {dispatch(receiveAllUsers(json));});

    // fetch('http://localhost:8000/CardPlusWeb/rest/user/getAllUsers').then(function(response){return response.json().then(function(json){console.log(json);});});
  }
}
