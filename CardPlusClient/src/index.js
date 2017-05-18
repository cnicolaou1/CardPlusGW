import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import { UserActionTypes, invokeGetAllUsers, addUser, deleteUser, updateUser} from './actions/UserActions';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import fetch from 'isomorphic-fetch';
import 'babel-polyfill';

let middleware = [promise(),thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware =[...middleware,createLogger()];
}

let store = createStore(allReducers, applyMiddleware(...middleware));

// let unsubscribe = store.subscribe(() =>{
//       console.log(store.getState().userStore.users);
//   }
// )


// store.dispatch(invokeGetAllUsers());
// store.dispatch(deleteUser('1'));

// store.dispatch(addUser({"id":"1",
//                         "firstName":"Christos",
//                         "lastName":"Nicolaou",
//                         "sex":"male",
//                         "email":"cnicolaou1@gmail.com",
//                         "idNumber":"765940",
//                         "birthDate" : "1977-05-18T00:00:00.000Z"
//                       }));
//
//
// store.dispatch(addUser({"id":"2",
//                         "firstName":"Marios",
//                         "lastName":"Nicolaou",
//                         "sex":"male",
//                         "email":"marios@gmail.com",
//                         "idNumber":"888888",
//                         "birthDate" : "1994-08-30T00:00:00.000Z"
//                       }));
//
// store.dispatch(deleteUser('1'));
// store.dispatch(updateUser({"id":"2",
//                         "firstName":"Marios",
//                         "lastName":"Nicolaou",
//                         "middleName":"Antoniou",
//                         "sex":"male",
//                         "email":"marios@gmail.com",
//                         "idNumber":"888888",
//                         "birthDate" : "1994-08-30T00:00:00.000Z"
//                       }));

// unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('content'));
