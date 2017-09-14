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

  increment() {
    // this.ngRedux.dispatch({ type: CounterActions.INCREMENT });
  }

  decrement() {
    // this.ngRedux.dispatch({ type: CounterActions.DECREMENT });
  }
}
