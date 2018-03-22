import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserJson {
  public users;
  constructor() {
    this.users = {
      'nick@gmail.com': {
        name: 'Nick Jones', email: 'nick@gmail.com', picture: 'assets/images/nick.png', grade: 1, class: 2,
        skills: [
          {
            category: 'photography', sub_category: 'Photography',   maxNumOfStudents: 5,
            image: 'assets/images/sport.png' , icon: 'fa fa-camera-retro fa-lg' ,
            color: 'tomato', status: 'pending',
          }],
        courses: [
          {
            category: 'Gaming', sub_category: 'Hide & Seek',
            image: 'assets/images/sport.png' , icon: 'fa fa-camera-retro fa-lg' , color: 'tomato', status: 'pending',
            mentorName: 'Lee Wong', mentorEmail: 'lee@gmail.com',
          },
          {
            category: 'Board games', sub_category: 'Chess',
            image: 'assets/images/sport.png' , icon: 'fa fa-chess-rook fa-lg' , color: 'gray', status: 'pending',
            mentorName: 'Eva Moor', mentorEmail: 'eva@gmail.com',
          }]},
      'eva@gmail.com': {
        name: 'Eva Moor', email: 'eva@gmail.com', picture: 'assets/images/eva.png', grade: 1, class: 2,
        skills: [{
          category: 'Board games', sub_category: 'Chess',maxNumOfStudents: 5,
          image: 'assets/images/sport.png' , icon: 'fa fa-chess-rook fa-lg' , color: 'gray', status: 'pending'
        }],
        courses: [
          {
            category: 'photography', sub_category: 'Photography',
            image: 'assets/images/sport.png' , icon: 'fa fa-camera-retro fa-lg' , color: 'gray', status: 'pending',
            mentorName: 'Nick Jones', mentorEmail: 'nick@gmail.com',
          }]},
      'jack@gmail.com': {
        name: 'Jack Williams', email: 'jack@gmail.com', picture: 'assets/images/jack.png', grade: 2, class: 2,
        skills: [{
          category: 'Sport', sub_category: 'Basketball',maxNumOfStudents: 4,
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
          category: 'Gaming', sub_category: 'Hide & Seek',maxNumOfStudents: 3,
          image: 'assets/images/sport.png' , icon: 'fa fa fa-gamepad fa-lg' , color: 'green', status: 'approved'
        }]},
      'alan@gmail.com': {
        name: 'Alan Thompson', email: 'alan@gmail.com', picture: 'assets/images/alan.png',
        skills: [{
          category: 'Video', sub_category: 'Video',
          image: 'assets/images/sport.png' , icon: 'fa fa fa-video fa-lg' , color: '#ffc107', status: 'approved'
        }]},
      'kate@gmail.com': {name: 'Kate Martinez', email: 'kate@gmail.com', picture: 'assets/images/kate.png',
        skills: [{
          category: 'Social Media', sub_category: 'Instagram',
          image: 'assets/images/sport.png' , icon: 'fa fa fa-gamepad fa-lg' , color: 'green', status: 'approved'
        }]},
      'almog@gmail.com': {
        name: 'Almog Sade', isStudent: true, class: 4,
        email: 'almog@gmail.com', picture: 'assets/images/almog.jpg',
        skills: [{category: 'Sport', sub_category: 'Football',
          image: 'assets/images/sport.png' , icon: 'fa fa fa-futbol fa-lg' , color: 'green'}]},
      'tom@gmail.com': {
        name: 'Tom Vaingart', isStudent: true,
        email: 'tom@gmail.com', picture: 'assets/images/nick.png',
        skills: [{category: 'Computer', sub_category: 'Computer',
          image: 'assets/images/sport.png' , icon: 'fa fa fa-keyboard fa-lg' , color: '#72c3fc'}]},
      't@gmail.com': {
        name: 'Tomi Moreno', isStudent: true, class: '1', category: '3',
        email: 't@gmail.com', remark: 'remark', picture: 'assets/images/japan.jpg',
        skills: [{category: 'Gaming', sub_category: 'hide & seek',
          image: 'assets/images/sport.png' , icon: 'fa fa fa-gamepad fa-lg' , color: 'green'}]},
      'alon@gmail.com': {
        name: 'Alon Sade', isStudent: true,
        email: 'alon@gmail.com', picture: 'assets/images/alon.jpg',
        skills: [{category: 'Music', sub_category: 'Music',
          image: 'assets/images/sport.png' , icon: 'fa fa fa-headphones fa-lg' , color: 'green'}]},
      'or@gmail.com': {
        name: 'Or Sade', isStudent: true,
        email: 'or@gmail.com', picture: 'assets/images/or3.jpg',
        skills: [{category: 'Gaming', sub_category: 'Gaming',
          image: 'assets/images/sport.png' , icon: 'fa fa fa-gamepad' , color: '#228ae6'}]},
      'amit@gmail.com': {
        name: 'Amit Sade', isStudent: true,
        email: 'amit@gmail.com', picture: 'assets/images/amit.jpg',
        skills: [{category: 'Gaming', sub_category: 'Gaming',
          image: 'assets/images/sport.png' , icon: 'fa fa fa-gamepad' , color: '#228ae6'}]},

    };
  }
}
