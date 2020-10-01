import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
interface Team {
  id: number;
}
interface Action {}
class FollowTeam implements Action {
  constructor(public payload: Team) {}
}

@Component({
  selector: 'teams-imperative',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1>Reactive Teams</h1>`
})
export class TeamsImperativeComponent {
  state = {
    actions$: new Subject<Action>()
  };

  constructor() { }
  
  followTeam = (team: Team) => this.state.actions$.next(team);

}