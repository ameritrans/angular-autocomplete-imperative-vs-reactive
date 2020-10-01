import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { switchMap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Component({
  selector: 'typeahead-reactive',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1>Reactive Typeahead</h1>
    <div>
      <input type="text"
          placeholder="Search Term"
          [ngModel]="searchTerm$ | async"
          (ngModelChange)="searchTerm$.next($event)" />
      <ul>
        <li *ngFor="let item of data$ | async" [innerHTML]="item"></li>
      </ul>
    </div>
  `
})
export class TypeaheadReactiveComponent {
  searchTerm$ = new Subject();

  data$ = this.searchTerm$.pipe(
    switchMap(term => this.apiService.fetchData(term))
  );

  constructor(private apiService: ApiService) { }
}