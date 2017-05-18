import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';


import UserReducer from './UserReducer';

const allReducers = combineReducers({
    userStore: UserReducer,
    form: formReducer
});

export default allReducers

//Method 1
/********/
// import FruitBasket from './FruitBasket';
// import DeliveryInfo from './DeliveryInfo';
//
// const allReducers = combineReducers({
//     fruitBasket: FruitBasket,
//     deliveryInfo: DeliveryInfo
// });

//Method 2
/********/
// import FruitBasket from './FruitBasket';
// import DeliveryInfo from './DeliveryInfo';
//
// function allReducers(state = {}, action) = combineReducers({
//     fruitBasket: FruitBasket(state.fruitBasket, action),
//     deliveryInfo: DeliveryInfo(state.deliveryInfo, action)
// });
//
// export default allReducers

//Method 3
/********/
// import * as reducers from './'
//
// const allReducers = combineReducers(reducers);
//
// export default allReducers;
