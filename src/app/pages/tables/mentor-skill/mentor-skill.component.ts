import { Component, OnInit } from '@angular/core';
import {NbAuthJWTToken, NbAuthService} from "@nebular/auth";
import {NbMediaBreakpointsService, NbThemeService} from "@nebular/theme";
import {CourseData, UserService} from "../../../@core/data/users.service";
import {User} from "../../forms/form-inputs/form-inputs.component";



@Component({
  selector: 'mentor-skill',
  templateUrl: './mentor-skill.component.html',
  styleUrls: ['./mentor-skill.component.scss']
})
export class MentorSkillComponent implements OnInit {
  user: any;
  model: User ;
  categories: any;
  classes: any;
  constructor(private userService: UserService,
              private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService,
              private authService: NbAuthService) {
    this.model = {name : '', isStudent :  true, picture : '', category: '1', remark: '',
      class: '1', sub_category: 'Tennis'};
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          const userName = token.token.split('@')[0];
          this.userService.getUsers()
            .subscribe((users: any) => {
              this.user = users[token.token];
              this.model.name = this.user.name;
              this.model.picture = this.user.picture;
              this.model.class = this.user.class;
              this.model.category = this.user.category;
              this.model.isStudent = this.user.isStudent;
              this.model.remark = this.user.remark;
            });
        }

      });
    this.categories = [ {name: 'Sport', id: 1}, {name: 'Music', id: 2} ,
      {name: 'Board Games', id: 3} , {name: 'Math', id: 4} , {name: 'Gaming', id: 5} ,
      , {name: 'Computer games', id: 6} , {name: 'Other', id: 7}];
    this.classes = [{name: 'א' , id: 1} , {name: 'ב', id: 2} , {name: 'ג', id: 3} ,
      {name: 'ד' , id: 4} , {name: 'ה' , id: 5} , {name: 'ו'  , id: 6}];

  }

  ngOnInit() {
  }

  public toggleType() {
    if (this.model.isStudent) {
      this.model.isStudent = false;
    } else {
      this.model.isStudent = true;
    }
  }
  public getCurrentType() {
    return  this.model.isStudent;
  }
  private getCategoryIcon(category: string) {
    let icon = 'fa fa fa-music';
    switch (category) {
      case 'Sport' : icon = 'fa fa-futbol';
          break;
      case 'Music' : icon = 'fa fa-futbol';
        break;
      case 'Dancing' : icon = 'fa fa fa-hand-scissors';
        break;
      case 'Board Games' : icon = 'fa-chess-rook';
        break;
      case 'Computer games' : icon = 'fa-gamepad';
        break;
      case 'Video' : icon = 'fa fa-futbol';
        break;
    }
  }
  public submit() {
    console.log( ' USER for submit : ' + JSON.stringify(this.model));
    let courseData: CourseData;
    let courseData2: any = {};
    courseData2.category = this.model.category;
    courseData2.sub_category = this.model.sub_category;
    courseData2.mentorEmail = this.user.email;
    courseData2.mentorName = this.user.name;
    courseData2.status = null;
    courseData2.color = 'tomato';
    courseData2.icon = 'fa fa fa-music';
    courseData = courseData2;
    this.user.skills = [];
    this.user.skills.push(courseData);
    this.userService.updateUser(this.user);

  }
}



