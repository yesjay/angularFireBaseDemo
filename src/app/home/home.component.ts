import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private angularAuth: AngularFireAuth,
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.angularAuth.auth.signOut().then(() => {
      window.location.reload();
    });
  }
}
