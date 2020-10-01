import { Component, ChangeDetectionStrategy } from '@angular/core';
interface Team {
  id: number;
}

@Component({
  selector: 'teams-imperative',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1>Imperative Teams</h1>`
})
export class TeamsImperativeComponent {
  user = {
    teamsFollowing: []
  }
  userFollowingThisTeam = false;

  constructor() { }
  
  followTeam = (team: Team) => {
    this.user.teamsFollowing.push(team);
    this.userFollowingThisTeam = true;
    // Great job everyone!
  }

  followTeamCorrectly = (team: Team) => {
    this.user.teamsFollowing.push(team);
    this.userFollowingThisTeam = true;
    this.also,SubscribeToNotificationsForTeam(team);
  }
}