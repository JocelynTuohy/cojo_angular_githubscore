import { Component } from '@angular/core';
import { FetchUserService } from './fetch-user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'GitHub Score';
  githubUsername: string;
  score: number = 0;
  found: boolean = false;
  notFound: boolean = false;
  constructor(private _fetchUserService: FetchUserService){}
  calculateResults(){
    this._fetchUserService.findUser(this.githubUsername)
      .then( user => {
        console.log(user);
        this.score = user.followers + user.public_repos;
        this.found = true;
        this.notFound = false;
      })
      .catch( err => {
        console.log(err);
        this.found = false;
        this.notFound = true;
      })
  }
}
