import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/service';
import { User } from '../shared/model/user.type';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {
  users: Array<User>;
  displayedColumns: Array<string>;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    // this.userService.query().subscribe((users: Array<User>) => {
    //   this.users = users;
    // })
    this.displayedColumns = ['name', 'phone', 'gender', 'editor'];
  }

}
