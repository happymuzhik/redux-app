import { Subscription } from 'rxjs/Subscription';
import { Todo } from './../models';
import { IAppState, todosSelector, lastUpdateDateSelector } from './../redux/reducer';
import { AppActions } from './../redux/actions';
import { NgRedux, select } from 'ng2-redux';
import { Component, OnDestroy } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnDestroy {
  @select( state => todosSelector(state).length ) todos$: Observable<number>;
  private todosCount = 0;
  private todosCountSubscription: Subscription;

  @select(lastUpdateDateSelector) lastUpdate$: Observable<string>;
  private lastUpdateDate: string;
  private lastUpdateDateSubscription: Subscription;

  // Read the comment in TodoService
  constructor(private store: NgRedux<IAppState>,
              private actions: AppActions) {
    this.todosCountSubscription = this.todos$.subscribe( todosCnt => this.todosCount = todosCnt );
    this.lastUpdateDateSubscription = this.lastUpdate$.subscribe( lastUpdate => this.lastUpdateDate = lastUpdate );
  }

  ngOnDestroy() {
    this.todosCountSubscription.unsubscribe();
    this.lastUpdateDateSubscription.unsubscribe();
  }

  clearTodos() {
    this.actions.clearTodos();
  }
}
