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

export function rootReducer(state: IAppState = INITIAL_STATE, action: Action): IAppState {
  let todos: Todo[];

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

      case Constants.ADD_TODO:
        return tassign(state, {
          todos: [...todosSelector(state), new Todo(action.payload)],
          lastUpdateDate: (new Date()).toString()
        });

      case Constants.TOGGLE_TODO:
          todos = [...todosSelector(state)];
          todos.map( todo => {
            if(todo.title === action.payload){
              todo.isCompleted = !todo.isCompleted;
            }
          });
          return tassign(state, {
            todos: todos,
            lastUpdateDate: (new Date()).toString()
          });

      case Constants.REMOVE_TODO:
          todos = [...todosSelector(state)];
          todos = todos.filter( todo => todo.title !== action.payload );
          return tassign(state, {
            todos: todos,
            lastUpdateDate: (new Date()).toString()
          });

      default: return state;
  }
}
