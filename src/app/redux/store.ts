import { IAppState } from './reducer';
import { applyMiddleware, Store, combineReducers, compose, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import { rootReducer } from './reducer';

export const store: Store<IAppState> = createStore(
  rootReducer,
  compose(applyMiddleware(reduxLogger))
);
