import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ng-container *ngIf="typeahead">
      <typeahead-imperative></typeahead-imperative>
      <typeahead-reactive></typeahead-reactive>
    </ng-container>
    <ng-container *ngIf="!typeahead">
      <typeahead-imperative></typeahead-imperative>
      <typeahead-reactive></typeahead-reactive>
    </ng-container>
    <p id="nav">
      <a href="#" (click)="changeView(true)">Typeahead</a>
      <br>
      <a href="#" (click)="changeView(true)">Teams</a>
    </p>
  `, 
  styles: [`
    p {
      font-family: Lato;
    }
    typeahead-reactive, typeahead-imperative {
      float: left;
      padding: 2em;
    }
    #nav a {
      color: #236;
      font-size: 10px;
    }
  `]
})
export class AppComponent  {
  typeahead = true;
  changeView = typeahead => this.typeahead = typeahead;
}
