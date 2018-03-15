import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    'nick@gmail.com': {name: 'Nick Jones', email: 'nick@gmail.com', picture: 'assets/images/nick.png'},
    'eva@gmail.com': {name: 'Eva Moor', email: 'eva@gmail.com', picture: 'assets/images/eva.png'},
    'jack@gmail.com': {name: 'Jack Williams', email: 'jack@gmail.com', picture: 'assets/images/jack.png'},
    'lee@gmail.com': {name: 'Lee Wong', email: 'lee@gmail.com', picture: 'assets/images/lee.png'},
    'alan@gmail.com': {name: 'Alan Thompson', email: 'alan@gmail.com', picture: 'assets/images/alan.png'},
    'kate@gmail.com': {name: 'Kate Martinez', email: 'kate@gmail.com', picture: 'assets/images/kate.png'},
    'almog@gmail.com': {
      name: 'Almog Sade', isStudent: true,
      email: 'almog@gmail.com', picture: 'assets/images/almog.png',
    skills: [{category: 'Sport', sub_category: 'Football'}, {category: 'Sport', sub_category: 'Basketball'},
      {category: 'Sport', sub_category: 'Tennis'}]},
    'tom@gmail.com': {
      name: 'Tom Vaingart', isStudent: true,
      email: 'tom@gmail.com', picture: 'assets/images/tom.png'
    },
    't@gmail.com': {
      name: 'Tami Moreno', isStudent: true, class: '1', category: '3',
      email: 't@gmail.com', remark: 'remark', picture: 'assets/images/almog.png'
    },
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  updateUser(user: any) {
    this.users[user.email] = user;
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
}
