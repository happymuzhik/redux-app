import { IAppState } from './../redux/reducer';
import { AppActions } from './../redux/actions';
import { NgRedux } from 'ng2-redux';
import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // Read the comment in TodoService
  constructor(private store: NgRedux<IAppState>,
              private actions: AppActions) {
  }

  addTodo(input) {
    if (!input.value) {
      return false;
    }
    // this.service.addTodo(input.value);

    input.value = '';
  }

  toggleTodo(todo) {
    // this.service.toggleTodo(todo);
  }

  removeTodo(todo) {
    // this.service.removeTodo(todo);
  }
}
