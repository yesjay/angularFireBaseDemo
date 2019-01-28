import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router,  ActivatedRoute, Params } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { flatMap } from 'rxjs/operators';

import { User } from '../shared/model/user.type';
import { UserService } from '../shared/service';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.scss']
})
export class UserModifyComponent implements OnInit {
  type: string;
  model: User;
  formGroup: FormGroup;
  usersCollection: AngularFirestoreCollection<User>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ngDataBase: AngularFirestore,
  ) { }

  ngOnInit() {
    this.type = this.getType();
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      gender: new FormControl('')
    });
    if (this.type === 'modify') {
      this.activatedRoute.params.pipe(
        flatMap((params: Params) => this.ngDataBase.doc('user/' + params.id).valueChanges())
      ).subscribe((user: User) => {
        this.model = user;
        this.formGroup.patchValue(this.model);
      });
    }
  }

  onSubmit() {
    const data = this.formGroup.value,
          newId = this.ngDataBase.createId();
    if (this.type === 'modify') {
      data.id = this.model.id;
      this.ngDataBase.collection('user').doc(data.id).update(data).then(() => {
        this.router.navigate(['home']);
      });
    } else {
      data.id = newId;
      this.ngDataBase.collection('user').doc(newId).set(data).then(() => {
        this.router.navigate(['home']);
      });
    }
  }

  delete() {
    this.formGroup.reset();
    this.ngDataBase.collection('user').doc(this.model.id).delete().then(() => {
      this.router.navigate(['home']);
    });
  }

  private getType() {
    return this.router.url.indexOf('modify') > -1 ? 'modify' : 'create';
  }
}
