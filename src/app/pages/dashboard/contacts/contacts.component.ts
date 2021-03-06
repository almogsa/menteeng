import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService} from '@nebular/theme';

import {CourseData, UserData, UserService} from '../../../@core/data/users.service';
import {NbAuthService, NbAuthJWTToken} from '@nebular/auth';

@Component({
  selector: 'ngx-contacts',
  styleUrls: ['./contacts.component.scss'],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit, OnDestroy {

  recent: any[];
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  contacts: any;
  users: any;
  user: any;
  themeSubscription: any;
  notRegiteredMentors: any[];
  notRegiteredStudents: any[];
  @Input() title: string;
  @Input() search: string;
  @Input() userType: string;
  @Input() getCourseUsers: string;
  @Input() isList: boolean;
  @Input() isStatus: boolean;

  constructor(private userService: UserService,
              private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService,
              private authService: NbAuthService) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          const userName = token.token.split('@')[0];
          this.userService.getUsers()
            .subscribe((users: any) => {
              this.user = users[token.token];
              //  alert('cahnge')
            });
          // here we receive a payload from the token and assigne it to our `user` variable
          //  this.user = token;
        }

      });
  }

  ngOnInit() {

    this.userService.getUsers()
      .subscribe((users: any) => {
        this.contacts = [];
        this.users = users;
        this.recent = [];
        this.notRegiteredStudents = [];
        this.notRegiteredMentors = [];
        if (typeof this.isList === 'undefined') {
          this.isList = false;
        }
        ;
        if (typeof this.isStatus === 'undefined') {
          this.isStatus = false;
        }
        ;
        console.log('IS LIST : ', this.isList);
        for (const curUser in users) {
          if (users.hasOwnProperty(curUser)) {
            if (this.userType === 'students' || this.userType === 'mentors') {
              if (this.userType === 'students') {
                if (users[curUser].position === 'student') {
                  if (!!users[curUser].courses && users[curUser].courses.length > 0) {
                    this.contacts.push(users[curUser])
                  } else {
                    this.notRegiteredStudents.push(users[curUser]);
                  }
                }
              }
              if (this.userType === 'mentors') {
                if (users[curUser].position === 'mentor') {
                    if( !!users[curUser].skills && users[curUser].skills.length > 0) {
                    this.contacts.push(users[curUser])
                  } else {
                    this.notRegiteredMentors.push(users[curUser]);
                  }
                }
              }
            } else {
              this.contacts.push(users[curUser])
            }
            //console.log(curUser);
            //this.contacts.push(users[curUser])
          }
        }

        this.recent = [
          {user: users.alan, type: 'home', time: '9:12 pm'},
          {user: users.eva, type: 'home', time: '7:45 pm'},
          {user: users.nick, type: 'mobile', time: '5:29 pm'},
          {user: users.lee, type: 'mobile', time: '11:24 am'},
          {user: users.jack, type: 'mobile', time: '10:45 am'},
          {user: users.kate, type: 'work', time: '9:42 am'},
          {user: users.kate, type: 'work', time: '9:31 am'},
          {user: users.jack, type: 'mobile', time: '8:01 am'},
        ];
      });
  }

  ngOnChanges(changes) {
    this.contacts = [];
    if (changes && changes.search) {
      this.isList = true;
      for (const curUser in this.users) {
        if (this.users.hasOwnProperty(curUser)) {
          console.log(curUser);
          let user = this.users[curUser];
          if (user && user.skills && user.skills.length > 0) {
            //  if (user.name.toLowerCase().indexOf(changes.search.currentValue.toLowerCase() > -1)) {
            //   this.contacts.push(user) ;
            //   break;
            //  }
            for (const cat of user.skills) {
              if (cat.category.toLowerCase().indexOf(changes.search.currentValue.toLowerCase()) > -1
                || cat.sub_category.toLowerCase().indexOf(changes.search.currentValue.toLowerCase()) > -1 ||
                changes.search.currentValue === '*')
                this.contacts.push(user);
              break;
            }
          }

        }
      }
    } else if (changes && changes.getCourseUsers) {
      for (const curUser in this.users) {
        if (this.users.hasOwnProperty(curUser)) {
          const user = this.users[curUser];
          if (user && user.courses && user.courses.length > 0) {
            for (const course of user.courses) {
              if (changes.getCourseUsers.currentValue.toLowerCase()
                  .indexOf(course.sub_category.toLowerCase()) > -1 &&
                changes.getCourseUsers.currentValue.toLowerCase()
                  .indexOf(course.mentorEmail.toLowerCase()) > -1) {
                this.contacts.push(user);
              }
            }
          }
        }
      }
    }
  }

  ngOnDestroy() {
    if (!!this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  changeStatus(contact) {
    contact.status = 'pending';
    if (typeof this.user.courses === 'undefined') {
      this.user.courses = [];
    }
    let courseData = this.getCourseData(contact);
    this.user.courses.push(courseData);
    this.userService.updateUser(this.user);
  }

  private getCourseData(contact: UserData): CourseData {
    let course: any = {};
    course.mentorEmail = contact.email;
    course.category = contact.skills[0].category;
    course.sub_category = contact.skills[0].sub_category;
    course.icon = contact.skills[0].icon;
    course.color = contact.skills[0].color;
    course.mentorName = contact.name;
    course.status = contact.status;
    course.picture = contact.picture;
    return course;
  }

  getColorByStatus(status: string) {
    let icon = 'btn btn-success'
    switch (status) {
      case 'pending' :
        icon = 'btn btn-warning';
        break;
      case 'approved' :
        icon = 'btn btn-success';
        break;
      case 'rejected' :
        icon = 'btn btn-danger';
        break;
    }
    return icon;
  }

  public getCourseStatus(contact) {
    if (this.user && this.user.courses) {
      let courses = this.user.courses.filter(x => x.mentorEmail === contact.email);
      if (courses && courses.length > 0) {
        return courses[0].status;
      } else return null;
    } else return null;
  }

  getNotRegiterd(type: string) {
    if (type === 'Students') {
      return this.notRegiteredStudents;
    } else {
      return this.notRegiteredMentors;
    }
  }
}
