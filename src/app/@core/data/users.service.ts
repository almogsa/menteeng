import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    'nick@gmail.com': {name: 'Nick Jones', email: 'nick@gmail.com', picture: 'assets/images/nick.png',
     skills: [{category: 'photography', sub_category: 'photography',
    image: 'assets/images/sport.png' , icon: 'fa fa-camera-retro' , color: 'tomato'}]},
    'eva@gmail.com': {name: 'Eva Moor', email: 'eva@gmail.com', picture: 'assets/images/eva.png',
    skills: [{category: 'Chess', sub_category: 'Chess',
    image: 'assets/images/sport.png' , icon: 'fa fa-chess-rook' , color: 'gray'}]},
    'jack@gmail.com': {name: 'Jack Williams', email: 'jack@gmail.com', picture: 'assets/images/jack.png',
     skills: [{category: 'Sport', sub_category: 'Basketball',
    image: 'assets/images/sport.png' , icon: 'fa fa fa-basketball-ball' , color: 'tomato'}]},
    'lee@gmail.com': {name: 'Lee Wong', email: 'lee@gmail.com', picture: 'assets/images/lee.png',
    skills: [{category: 'Gaming', sub_category: 'gaiming',
    image: 'assets/images/sport.png' , icon: 'fa fa fa-gamepad' , color: 'green'}]},
    'alan@gmail.com': {name: 'Alan Thompson', email: 'alan@gmail.com', picture: 'assets/images/alan.png',
    skills: [{category: 'Videp', sub_category: 'video',
    image: 'assets/images/sport.png' , icon: 'fa fa fa-video' , color: '#ffc107'}]},
    'kate@gmail.com': {name: 'Kate Martinez', email: 'kate@gmail.com', picture: 'assets/images/kate.png',
     skills: [{category: 'Youtube', sub_category: 'Youtube',
    image: 'assets/images/sport.png' , icon: 'fa fa fa-music' , color: '#dc354'}]},
    'almog@gmail.com': {
      name: 'Almog Sade', isStudent: true,
      email: 'almog@gmail.com', picture: 'assets/images/almog.jpg',
    skills: [{category: 'Sport', sub_category: 'Football',
     image: 'assets/images/sport.png' , icon: 'fa fa fa-futbol' , color: 'green'}]},
    'tom@gmail.com': {
      name: 'Tom Vaingart', isStudent: true,
      email: 'tom@gmail.com', picture: 'assets/images/nick.png',
      skills: [{category: 'Computer', sub_category: 'computer',
      image: 'assets/images/sport.png' , icon: 'fa fa fa-keyboard' , color: '#72c3fc'}]},
    't@gmail.com': {
      name: 'Tomi Moreno', isStudent: true, class: '1', category: '3',
      email: 't@gmail.com', remark: 'remark', picture: 'assets/images/japan.jpg',
        skills: [{category: 'Gaming', sub_category: 'gaiming',
      image: 'assets/images/sport.png' , icon: 'fa fa fa-gamepad' , color: 'green'}]},
      'alon@gmail.com': {
        name: 'Alon Sade', isStudent: true,
        email: 'alon@gmail.com', picture: 'assets/images/alon.jpg',
        skills: [{category: 'Music', sub_category: 'music',
        image: 'assets/images/sport.png' , icon: 'fa fa fa-headphones' , color: 'green'}]},
        'or@gmail.com': {
          name: 'Or Sade', isStudent: true,
          email: 'or@gmail.com', picture: 'assets/images/or3.jpg',
          skills: [{category: 'Dancing', sub_category: 'dancing',
          image: 'assets/images/sport.png' , icon: 'fa fa fa-hand-scissors' , color: 'green'}]},
          'amit@gmail.com': {
            name: 'Amit Sade', isStudent: true,
            email: 'amit@gmail.com', picture: 'assets/images/amit.jpg',
            skills: [{category: 'Gaming', sub_category: 'gaming',
            image: 'assets/images/sport.png' , icon: 'fa fa fa-gamepad' , color: '#228ae6'}]},

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
