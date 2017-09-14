import { Todo } from './../models';
import { IAppState, todosSelector, lastUpdateDateSelector } from './../redux/reducer';
import { AppActions } from './../redux/actions';
import { NgRedux, select } from 'ng2-redux';
import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  @select( state => todosSelector(state).length ) todos: Observable<number>;
  @select(lastUpdateDateSelector) lastUpdate: Observable<string>;

  // Read the comment in TodoService
  constructor(private store: NgRedux<IAppState>,
              private actions: AppActions) {}

  clearTodos() {
    this.actions.clearTodos();
  }
}
