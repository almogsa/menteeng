import { Injectable } from '@angular/core';
import {UserData, UserService} from './users.service';

@Injectable()
export class SmartTableService {

  constructor(private userService: UserService) {
  }
  realData = [];
  data = [{
    id: 1,
    firstName: 'Jack',
    lastName: 'Sparrow',
    username: '@jack',
    email: 'jack@yandex.ru',
    age: '30',
  }, {
    id: 6,
    firstName: 'Ann',
    lastName: 'Smith',
    username: '@ann',
    email: 'ann@gmail.com',
    age: '21',
  }, {
    id: 7,
    firstName: 'Barbara',
    lastName: 'Black',
    username: '@barbara',
    email: 'barbara@yandex.ru',
    age: '43',
  }];

  getData() {
    this.userService.getUsers()
      .subscribe((users: any) => {
        for (const curUser in users) {
          if (users.hasOwnProperty(curUser)) {
            const courseData = this.getCourseData(users[curUser]);
            this.realData.push(courseData);
          }
        }
      });
    return this.data = this.realData;
  }

  private getCourseData(userData: UserData) {
    const courseData: any = {};
    courseData.grade = userData.grade;
    courseData.category = userData.skills.length > 0  ? userData.skills[0].category : '';
    courseData.skill = userData.skills.length > 0  ? userData.skills[0].sub_category : '';
    courseData.mentor = userData.name;
    courseData.email = userData.email;
    let status = 'unavailable';
    if (!!userData.skills &&
      !! userData.skills[0] && userData.skills[0].status && userData.skills[0].status !== '') {
      status = userData.skills[0].status;

    }
    courseData.status = status;
    return courseData;
  }
}
