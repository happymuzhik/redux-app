import { Action } from './actions';
import { Todo } from '../models';
import { Constants } from './constants';
import { tassign } from 'tassign';

export interface IAppState {
  todos: Todo[];
  lastUpdateDate: string;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdateDate: ''
};

export const todosSelector = function(state: IAppState) {
  return state.todos;
};

export const lastUpdateDateSelector = function(state: IAppState) {
  return state.lastUpdateDate;
};

export function rootReducer(state: IAppState, action: Action): IAppState {
  switch (action.type) {
      case Constants.DO_SOMTH:
        return tassign(state, {
          lastUpdateDate: 'kek'
        });
      case Constants.CLEAR_TODOS:
        return tassign(state, {
          todos: [],
          lastUpdateDate: (new Date()).toString()
        });
      default: return state;
  }
}
