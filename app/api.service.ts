import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {timer} from 'rxjs';
import {map, tap, switchMap} from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor() { }

  public fetchData = str => timer(200 + 1.5 * 1000 * Math.random())
    .pipe(
      map(t => this.data
        .filter(item => item.indexOf(str) !== -1)
        .map(item => item.replace(new RegExp(str, "g"), `<strong>${str}</strong>`))
      ),
      tap(console.log)
    )

  private data = [
    'app',
    'apple',
    'application',
    'amplify',
    'free real estate'
  ]
}