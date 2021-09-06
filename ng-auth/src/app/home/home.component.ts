import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {

  constructor() {
  }

  isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt");
    return !!token;
  }

  logOut() {
    localStorage.removeItem("jwt");
  }
}
