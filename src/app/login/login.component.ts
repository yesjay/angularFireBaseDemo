import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

import { Login } from '../shared/model/login.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: Login;
  formData: FormGroup;
  item: Observable<any[]>;

  constructor(
    private angularAuth: AngularFireAuth,
  ) { }

  ngOnInit() {
    this.formData = new FormGroup({
      account: new FormControl(''),
      password: new FormControl(''),
    })
  }

  onSubmit() {
    this.model = this.formData.value;
    this.angularAuth.auth.signInAndRetrieveDataWithEmailAndPassword(
      this.model.account,
      this.model.password
    ).then(() => {
      window.location.reload();
    });   
  }
}
