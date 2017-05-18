import { UserActionTypes } from '../actions/UserActions.js'

const initialState = {
  ajaxFetching:false,
  users:[],
  selectedUser:{},
  user:{firstName:"initial"}
}
export default function (state=initialState, action) {
  //Object.assign copies state (2nd argument) to an empty object (1st argument) changing only
  //the values in the third argument
  // console.log(state);
  switch (action.type) {
    case UserActionTypes.GET_USERS:
     return Object.assign({}, state,{
        ajaxFetching: true
     })
     case UserActionTypes.RECEIVE_ALL_USERS:
       return Object.assign({}, state,{
          ajaxFetching: false,
          users: action.users
       })
    case UserActionTypes.ADD_USER:
      return Object.assign({}, state, {
        users: [...state.users,action.user]
      })
    case UserActionTypes.DELETE_USER:

      return Object.assign({}, state, {
        users: state.users.filter(item => item.id != "1")
      })
    // case UserActionTypes.GET_USER:
    //   return Object.assign({}, state, {
    //     user: state.users.filter(id => id == action.id)
    //   })
    // case UserActionTypes.GET_USERS:
    //   return Object.assign({}, state, {
    //     users: state.users
    //   })
    case UserActionTypes.UPDATE_USER:
      return Object.assign({}, state, {
        users: Object.assign({}, state.users,action.user)
      })
    default:
      return state
  }
// export default function (state=initialState, action) {
//   //Object.assign copies state (2nd argument) to an empty object (1st argument) changing only
//   //the values in the third argument
//   // console.log(state);
//   switch (action.type) {
//     case UserActionTypes.ADD_USER:
//       return Object.assign({}, state, {
//         users: [...state.users,action.user]
//       })
//     case UserActionTypes.DELETE_USER:
//       return Object.assign({}, state, {
//         users: state.users.filter(item => item.id != "1")
//       })
//     // case UserActionTypes.GET_USER:
//     //   return Object.assign({}, state, {
//     //     user: state.users.filter(id => id == action.id)
//     //   })
//     // case UserActionTypes.GET_USERS:
//     //   return Object.assign({}, state, {
//     //     users: state.users
//     //   })
//     case UserActionTypes.UPDATE_USER:
//       return Object.assign({}, state, {
//         users: Object.assign({}, state.users,action.user)
//       })
//     default:
//       return state
//   }
}
