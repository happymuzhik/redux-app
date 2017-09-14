import { Constants } from './constants';
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './reducer';

export interface Action {
  type: string;
  payload: any;
}

@Injectable()
export class AppActions {

  constructor(private ngRedux: NgRedux<IAppState>) {}

  doSmth() {
    this.ngRedux.dispatch({ type: Constants.DO_SOMTH });
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: Constants.CLEAR_TODOS });
  }

  addTodo(title: string) {
    this.ngRedux.dispatch({ type: Constants.ADD_TODO, payload: title });
  }

  toggleTodo(title: string) {
    this.ngRedux.dispatch({ type: Constants.TOGGLE_TODO, payload: title });
  }

  removeTodo(title: string) {
    this.ngRedux.dispatch({ type: Constants.REMOVE_TODO, payload: title });
  }

}
