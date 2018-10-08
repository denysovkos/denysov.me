import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counterReducer } from './modules/counter';
import { starsReducer } from './modules/stars';
import { reposReducer } from './modules/repos';
import { contactReducer } from './modules/contact/index';
import { IStore } from './IStore';

const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  counter: counterReducer,
  stars: starsReducer,
  repos: reposReducer,
  contact: contactReducer,
  reduxAsyncConnect: reducer,
});

export default rootReducer;
