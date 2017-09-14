import { Todo } from './../models';
import { Observable } from 'rxjs/Observable';
import { IAppState, todosSelector } from './../redux/reducer';
import { AppActions } from './../redux/actions';
import { NgRedux, select } from 'ng2-redux';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../todo.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnDestroy {
  // Read the comment in TodoService

  @select( todosSelector ) todos$: Observable<Todo[]>;
  private todoList: Todo[] = [];
  private todoListSubscription: Subscription;

  constructor(private store: NgRedux<IAppState>,
              private actions: AppActions) {
    this.todoListSubscription = this.todos$.subscribe( todos => this.todoList = todos );
  }

  ngOnDestroy() {
    this.todoListSubscription.unsubscribe();
  }

  addTodo(input) {
    if (input.value) {
      this.actions.addTodo(input.value);
      input.value = '';
    }
  }

  toggleTodo(todo) {
    this.actions.toggleTodo(todo.title);
  }

  removeTodo(todo) {
    this.actions.removeTodo(todo.title);
  }
}
