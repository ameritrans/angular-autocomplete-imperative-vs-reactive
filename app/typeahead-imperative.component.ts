import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from './api.service';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'typeahead-imperative',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1>Imperative Typeahead</h1>
    <div>
      <input type="text"
          placeholder="Search Term"
          [ngModel]="searchTerm"
          (ngModelChange)="changeSearchTerm($event)" />
      <ul>
        <li *ngFor="let item of data" [innerHTML]="item"></li>
      </ul>
    </div>
  `
})
export class TypeaheadImperativeComponent {
  searchTerm = '';
  data: string[];
  subscription: Subscription;

  constructor(private apiService: ApiService) { }
  
  changeSearchTerm(term) {
    this.subscription = this.apiService.fetchData(term)
      .subscribe(data => this.data = data)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}