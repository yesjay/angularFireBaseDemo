import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

import { DialogComponent } from '../dialog/dialog.component';

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
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.formData = new FormGroup({
      account: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    this.model = this.formData.value;
    this.angularAuth.auth.signInAndRetrieveDataWithEmailAndPassword(
      this.model.account,
      this.model.password
    ).then(() => {
      window.location.reload();
    }).catch((error) => {
      this.openDialog(error, 'loginFail');
    });
  }

  openDialog(message, type): void {
    let data;
    if (type === 'loginFail') {
      data = {
        type: type,
        error: message
      };
    } else if (type === 'forgetPassword') {
      data = {
        type: type,
        backupEmail: {
          account: 'test@gmail.com',
          password: '123456'
        }
      };
    }
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
