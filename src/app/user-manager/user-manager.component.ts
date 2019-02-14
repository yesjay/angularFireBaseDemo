import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { User } from '../shared/model/user.type';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {
  users: Array<User>;
  displayedColumns: Array<string>;
  usersCollection: AngularFirestoreCollection<User>;

  constructor(
    private ngDataBase: AngularFirestore,
  ) { }

  ngOnInit() {
    this.usersCollection = this.ngDataBase.collection('user');
    this.usersCollection.valueChanges().subscribe((users: Array<User>) => {
      this.users = users;
    });
    this.usersCollection.get().subscribe(console.log);
    this.displayedColumns = ['name', 'email', 'phone', 'gender', 'editor'];
  }

}
