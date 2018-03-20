import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

export interface Skill {
  category: string;
  sub_category: string;
  image: string;
  icon: string;
  color: string;
  status: string; // pending or approved: supervisor need to approve new courses
}
export interface CourseData {
  mentorName: string;
  mentorEmail: string;
  picture: string;
  category: string;
  icon?: string;
  color?: string;
  sub_category: string;
  status: string; // status of the enrollment of users to course.
}
export interface UserData {
  name: string;
  email: string;
  picture: string;
  skills: Skill;
  status?: string;
  courses: CourseData[]; // the courses that this user enrolled to and the status of the enrollment.
  position: string;
}
export interface UserInterface {
  id: UserData;
}
@Injectable()
export class UserService {

  private users = {
    'nick@gmail.com': {
      name: 'Nick Jones', email: 'nick@gmail.com', picture: 'assets/images/nick.png',
      skills: [
        {
          category: 'photography', sub_category: 'photography',
          image: 'assets/images/sport.png' , icon: 'fa fa-camera-retro fa-lg' ,
          color: 'tomato', status: 'pending',
        }],
      courses: [
        {
          category: 'Gaming', sub_category: 'hide & seek',
          image: 'assets/images/sport.png' , icon: 'fa fa-camera-retro fa-lg' , color: 'tomato', status: 'pending',
          mentorName: 'Lee Wong', mentorEmail: 'lee@gmail.com',
        },
        {
          category: 'Board games', sub_category: 'Chess',
          image: 'assets/images/sport.png' , icon: 'fa fa-chess-rook fa-lg' , color: 'gray', status: 'pending',
          mentorName: 'Eva Moor', mentorEmail: 'eva@gmail.com',
        }]},
    'eva@gmail.com': {
      name: 'Eva Moor', email: 'eva@gmail.com', picture: 'assets/images/eva.png',
      skills: [{
        category: 'Board games', sub_category: 'Chess',
        image: 'assets/images/sport.png' , icon: 'fa fa-chess-rook fa-lg' , color: 'gray', status: 'pending'
      }],
      courses: [
        {
          category: 'photography', sub_category: 'photography',
          image: 'assets/images/sport.png' , icon: 'fa fa-camera-retro fa-lg' , color: 'gray', status: 'pending',
          mentorName: 'Nick Jones', mentorEmail: 'nick@gmail.com',
        }]},
    'jack@gmail.com': {
      name: 'Jack Williams', email: 'jack@gmail.com', picture: 'assets/images/jack.png',
      skills: [{
        category: 'Sport', sub_category: 'Basketball',
        image: 'assets/images/sport.png' , icon: 'fa fa fa-basketball-ball fa-lg' , color: 'tomato', status: 'pending'
      }],
      courses: [
        {
          category: 'photography', sub_category: 'photography',
          image: 'assets/images/sport.png' , icon: 'fa fa-camera-retro fa-lg' , color: 'tomato', status: 'pending',
          mentorName: 'mentor', mentorEmail: 'eva@gmail.com',
        },
        {
          category: 'Board games', sub_category: 'Chess',
          image: 'assets/images/sport.png' , icon: 'fa fa-chess-rook fa-lg' , color: 'gray', status: 'pending',
          mentorName: 'Eva Moor', mentorEmail: 'eva@gmail.com',
        }]},
    'lee@gmail.com': {
      name: 'Lee Wong', email: 'lee@gmail.com', picture: 'assets/images/lee.png',
      skills: [{
      category: 'Gaming', sub_category: 'hide & seek',
        image: 'assets/images/sport.png' , icon: 'fa fa fa-gamepad fa-lg' , color: 'green', status: 'approved'
      }]},
    'alan@gmail.com': {
      name: 'Alan Thompson', email: 'alan@gmail.com', picture: 'assets/images/alan.png',
      skills: [{
        category: 'Videp', sub_category: 'video',
        image: 'assets/images/sport.png' , icon: 'fa fa fa-video fa-lg' , color: '#ffc107', status: 'approved'
      }]},
    'kate@gmail.com': {name: 'Kate Martinez', email: 'kate@gmail.com', picture: 'assets/images/kate.png',
      skills: [{category: 'Youtube', sub_category: 'Youtube',
        image: 'assets/images/sport.png' , icon: 'fa fa fa-music fa-lg' , color: '#dc3545'}]},
    'almog@gmail.com': {
      name: 'Almog Sade', isStudent: true, class: 4,
      email: 'almog@gmail.com', picture: 'assets/images/almog.jpg',
      skills: [{category: 'Sport', sub_category: 'Football',
        image: 'assets/images/sport.png' , icon: 'fa fa fa-futbol fa-lg' , color: 'green'}]},
    'tom@gmail.com': {
      name: 'Tom Vaingart', isStudent: true,
      email: 'tom@gmail.com', picture: 'assets/images/nick.png',
      skills: [{category: 'Computer', sub_category: 'computer',
        image: 'assets/images/sport.png' , icon: 'fa fa fa-keyboard fa-lg' , color: '#72c3fc'}]},
    't@gmail.com': {
      name: 'Tomi Moreno', isStudent: true, class: '1', category: '3',
      email: 't@gmail.com', remark: 'remark', picture: 'assets/images/japan.jpg',
      skills: [{category: 'Gaming', sub_category: 'hide & seek',
        image: 'assets/images/sport.png' , icon: 'fa fa fa-gamepad fa-lg' , color: 'green'}]},
    'alon@gmail.com': {
      name: 'Alon Sade', isStudent: true,
      email: 'alon@gmail.com', picture: 'assets/images/alon.jpg',
      skills: [{category: 'Music', sub_category: 'music',
        image: 'assets/images/sport.png' , icon: 'fa fa fa-headphones fa-lg' , color: 'green'}]},
    'or@gmail.com': {
      name: 'Or Sade', isStudent: true,
      email: 'or@gmail.com', picture: 'assets/images/or3.jpg',
      skills: [{category: 'Dancing', sub_category: 'dancing',
        image: 'assets/images/sport.png' , icon: 'fa fa fa-hand-scissors fa-lg' , color: 'green'}]},
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
  updateUserSkillProperty(email: string, propertyName: string, newValue: string) {
    this.users[email].skills[0][propertyName] = newValue;
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
}
